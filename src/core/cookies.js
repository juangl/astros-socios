import React from 'react';

export const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

export const getCookie = (cname) => {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length);
        }
    }
    return undefined;
}

export const getCookies = () => {
    const cookies = {};
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        const p = c.split('=');
        cookies[p[0]] = p[1];
    }
    return cookies;
}

export const withCookies = Component =>
  (props) => <Component cookies={getCookies()} {...props} />;

export default withCookies;
