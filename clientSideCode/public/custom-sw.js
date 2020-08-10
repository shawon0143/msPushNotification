const isClientFocused = () => {
    return clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then((windowClients) => {
        let clientIsFocused = false;

        for (let i = 0; i < windowClients.length; i++) {
            const windowClient = windowClients[i];
            if (windowClient.focused) {
                clientIsFocused = true;
                break;
            }
        }

        return clientIsFocused;
    });
}



const receivePushNotification = event => {
    console.log('[Service Worker] Push Received.');
    console.log('New notification', event.data.json());
    const { image, tag, url, title, text, orderId } = event.data.json();

    const options = {
        data: url,
        body: text,
        icon: image,
        vibrate: [200, 100, 200],
        tag: tag,
        renotify: true,
        image: image,
        timestamp: text,
        badge: '/favicon.ico',
        requireInteraction: false, // set true to not auto hide
        actions: [
            {
                action: 'Detail',
                title: 'View',
                icon: 'https://via.placeholder.com/128/ff0000',
            },
        ],
    };

    // The exception to the rule
    const promiseChain = isClientFocused()
        .then((clientIsFocused) => {
            if (clientIsFocused) {
                console.log('Don\'t need to show a notification.');
                return;

            }
            // Client isn't focused, we need to show a notification.
            return self.registration.showNotification(title, options);
        });

    event.waitUntil(promiseChain);


};

const openPushNotification = event => {
    console.log(
        '[Service Worker] Notification click Received.',
        event.notification.data,
    );

    event.notification.close();
    // Focus an existing window
    const urlToOpen = new URL(event.notification.data, self.location.origin).href;

    const promiseChain = clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then((windowClients) => {
        let matchingClient = null;

        for (let i = 0; i < windowClients.length; i++) {
            const windowClient = windowClients[i];
            if (windowClient.url === urlToOpen) {
                matchingClient = windowClient;
                break;
            }
        }

        if (matchingClient) {
            return matchingClient.focus();
        } else {
            return clients.openWindow(urlToOpen);
        }
    });

    event.waitUntil(promiseChain);



};

self.addEventListener('push', receivePushNotification);
self.addEventListener('notificationclick', openPushNotification);
