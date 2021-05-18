/*
 * @Description: 
 * @Author: GUI
 * @Date: 2021-05-17 23:15:58
 * @LastEditors: GUI
 * @LastEditTime: 2021-05-18 16:03:01
 */


// exdays：过期时间
export function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


export function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}


export function getSearch() {
    const href = window.location.href;
    let ret = "";
    let begin = false;
    for (let ch of href) {
        if (ch === "#") {
            ret = "";
            continue;
        } else if (ch === "?") {
            begin = true;
        }
        if (begin) {

            ret += ch
        }
    }
    return ret;
}