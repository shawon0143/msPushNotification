import {clients as JsonClients, ConnectionData} from 'jsonConnect';
import {sendPushNotification} from "./notification";

export class ConnectionController {

    stdHost = 'pdc.apozept.de';
    stdPort = 3002;
    wssHost = 'wss://services.apozept.de/wss/pdc/jcConnect';

    jsonClients: JsonClients;
    connection?: ConnectionData = undefined;
    connected = false;

    /*username = 'timo2@songfire.com';
    password = 'timo2timo2';*/
    username = 'christian@songfire.com';
    password = 'testest';
    // username?: string;
    // password?: string;
    loginToken?: string;

    keepLoggedIn = true;
    loggedOutForInfo = false;


    connectionFileName: string;

    connectMode: 'jsonSocket'|'webSocket' = 'jsonSocket';

    connectionFailures = 0;
    changeConnectionMode = false;

    logIncomingRequest(registratedFunction: (json: any, connectionData: ConnectionData) => void, json: any, connectionData: ConnectionData) {

        registratedFunction(json, connectionData);
    }

    logSendResponse(requestId: number, errorCode: number, params?: any) {
        this.connection!.sendResponse(requestId, errorCode, params);
    }

    constructor() {

        /*let a = { A: 1 };

        let b = { ...a, B: 2 };*/

        this.jsonClients = new JsonClients({useTls: true}, (json: any, connection: ConnectionData) => {
            this.logSendResponse(json.requestId, -10);
        });
        this.jsonClients.setOnDisconnect(() => {
            this.connected = false;
            setTimeout(() => {
                this.connect();
            }, 1000);
        });
       this.jsonClients.registrateCommand('notification', this.logIncomingRequest.bind(this, (json: any, connectionData: ConnectionData) => {
           console.log(json);
            if (json.notification && json.notification.orderId) {
                sendPushNotification(json.notification.pharmacyId, json.notification.orderId);
            }
           this.logSendResponse(json.requestId, 0);
       }));

    }

    init(isDev: boolean, connectionFileName: string) {

        this.connectionFileName = connectionFileName;

        if (isDev) {
            this.stdHost = 'pdc.dev.apozept.de';
            this.stdPort = 3014;
            this.wssHost = 'wss://services.dev.apozept.de/wss/pdc/jcConnect';
        }
        this.connect();
    }

    async sendCommand(command: string, params: any): Promise<any> {
        return new Promise<any>(fulfilled => {
            if (this.connection && this.connected) {
                this.connection.sendRequest(command, params, (json: any, _: ConnectionData) => {
                    fulfilled(json);
                });
            } else {
                fulfilled({ errorCode: -2 });
            }
        });
    }

    disconnect(): void {
        if (this.connection) {
            this.connection.disconnect();
        }
    }

    connect(): void {
        let connectCallback = async (connectSucceeded: boolean, connectionData: ConnectionData) => {

            let connectError = () => {
                this.connectionFailures++;
                if (this.connectionFailures >= 2) {
                }
                setTimeout(() => {
                    if (this.connected) {
                        this.disconnect();
                    } else {
                        setTimeout(() => {
                            this.connect();
                        }, 1000);
                    }
                }, 1000);
            };

            this.changeConnectionMode = true;
            if (connectSucceeded) {
                console.log('connected');
                this.connected = true;
                this.connection = connectionData;
                let connectionTestResult = await connectionController.sendCommand('keepAlive', {});
                if (connectionTestResult.errorCode != 0) {
                    if (this.connected) {
                        connectError();
                    }
                    return;
                }

                this.connectionFailures = 0;
                this.changeConnectionMode = false;

                if (this.loginToken || (this.username && this.password)) {
                    this.login();
                }
            } else {
                this.connected = false;
                connectError();
            }
        };

        if (this.changeConnectionMode) {
            if (this.connectMode === 'webSocket') {
                this.connectMode = 'jsonSocket';
            } else {
                this.connectMode = 'webSocket';
            }
        }

        if (this.connectMode === 'jsonSocket') {
            this.jsonClients.connect(this.stdHost, this.stdPort, connectCallback);
        } else {
            this.jsonClients.connectWs(this.wssHost, connectCallback);
        }
    }


    async login() {
        let result: any;

        let versionData = {};

        if (!this.loginToken) {
            result = await this.sendCommand('login', {email: this.username, password: this.password, ...versionData});
        } else {
            result = await this.sendCommand('loginWithToken', {loginToken: this.loginToken, ...versionData});
        }
        // console.log(result);
        if (result.errorCode === 0) {
            if (!this.loginToken) {
                this.loginToken = result.loginToken;
            }


        } else if (result.errorCode === 12) {

        } else if (result.errorCode === 10) {

        } else {

        }
    }





}

let connectionController = new ConnectionController();
export default connectionController;
