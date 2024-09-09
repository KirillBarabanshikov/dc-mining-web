import { Layout } from '@/shared/ui';
import { Footer, Header } from '@/widgets';
import { useLocation } from 'react-router-dom';
import { FC, PropsWithChildren, useEffect } from 'react';

const pagesWithoutFooter = ['/service'];

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
    const { pathname } = useLocation();

    const footerSlot = pagesWithoutFooter.includes(pathname) ? undefined : <Footer />;

    return (
        <LocationProvider>
            <Layout headerSlot={<Header />} footerSlot={footerSlot}>
                {children}
            </Layout>
        </LocationProvider>
    );
};

const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        ym(98130237, 'hit', location.pathname);
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return <>{children}</>;
};

// export const TagManager = () => {
//     const location = useLocation();
//
//     useEffect(() => {
//         // Функция для инициализации GTM
//         const initGTM = () => {
//             const script = document.createElement('script');
//             script.async = true;
//             script.id = 'GTM-KR6WQP9J';
//             script.innerHTML = `
//             (function (w, d, s, l, i) {
//                 w[l] = w[l] || [];
//                 w[l].push({
//                     'gtm.start': new Date().getTime(),
//                     event: 'gtm.js',
//                 });
//                 var f = d.getElementsByTagName(s)[0],
//                     j = d.createElement(s),
//                     dl = l != 'dataLayer' ? '&l=' + l : '';
//                 j.async = true;
//                 j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
//                 f.parentNode.insertBefore(j, f);
//             })(window, document, 'script', 'dataLayer', 'GTM-KR6WQP9J');
//         `;
//             document.head.appendChild(script);
//
//             const noscript = document.createElement('noscript');
//             noscript.innerHTML = `<iframe
//                 src="https://www.googletagmanager.com/ns.html?id=GTM-KR6WQP9J"
//                 height="0"
//                 width="0"
//                 style="display: none; visibility: hidden"
//             ></iframe>`;
//             document.body.appendChild(noscript);
//         };
//
//         // Функция для удаления GTM
//         const removeGTM = () => {
//             const scripts = document.querySelectorAll(`script[id*="GTM-KR6WQP9J"]`);
//             scripts.forEach((script) => script.remove());
//             const noscript = document.querySelector(`iframe[src*="GTM-KR6WQP9J"]`);
//             if (noscript) noscript.parentNode?.removeChild(noscript);
//         };
//
//         // Удаляем GTM перед переходом на новую страницу
//         removeGTM();
//
//         // Инициализируем GTM при каждом изменении маршрута
//         initGTM();
//     }, [location]);
//
//     return null;
// };
