function setCookie(e, t, n, a) {
    var i = new Date();
    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
    var o = "expires=" + i.toUTCString(),
        s = a ? ";SameSite=" + a : "";
    document.cookie = e + "=" + t + ";" + o + ";Secure;path=/" + s;
}

function getCookie(e) {
    for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), a = 0; a < n.length; a++) {
        for (var i = n[a]; " " == i.charAt(0);) i = i.substring(1);
        if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
    }
    return null;
}

function languageChange(lang) {
    setCookie("_lang", lang, 90, "None");
    setCookie("_lang_ss", lang, 90);
    return lang;
}

(function () {
    null === (n = getCookie("_compliance")) &&
        (document.querySelector("[data-compliance-container]") && document.querySelector("[data-compliance-container]").classList.remove("hide")),
        document.querySelector("[data-compliance]") &&
        document.querySelector("[data-compliance]").addEventListener("click", function () {
            window.event.preventDefault();
            setCookie("_compliance", "true", 90, "None");
            setCookie("_compliance_ss", "true", 90);
            document.querySelector("[data-compliance-container]").classList.add("hide");
        });
}.call(this),
    function () {
        var lang = getCookie("_lang") || getCookie("_lang_ss");
        var compliance = getCookie("_compliance") || getCookie("_compliance_ss");
        if (!lang && compliance) {
            lang = (navigator.language || navigator.userLanguage).split("-")[0];
            setCookie("_lang", lang, 90, "None");
            setCookie("_lang_ss", lang, 90);
        }

    }.call(this),
    function () {
        var e, t, n, a;
        "/" === window.location.pathname &&
            null !== (n = getCookie("_lang")) &&
            ((n == "el") && window.location.replace("/el/"));
        "/el/" === window.location.pathname &&
            null !== (n = getCookie("_lang")) &&
            ((n == "en") && window.location.replace("/"));

    }.call(this)
);

document.addEventListener("DOMContentLoaded", () => {
    (observer = new IntersectionObserver((e) => {
        e.forEach((e) => {
            e.intersectionRatio > 0 && (e.target.classList.add("aos-animate"), observer.unobserve(e.target));
        });
    })),
        document.querySelectorAll("[data-aos]").forEach((e) => {
            observer.observe(e);
        });
}),
    window.addEventListener("load", () => {
        const e = document.querySelector("[data-detect-autoplay]");
        e &&
            setTimeout(function () {
                0 == e.currentTime && (e.controls = !0);
            }, 500);
    }),
    document.addEventListener("DOMContentLoaded", () => {
        const e = document.querySelector("html"),
            t = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            a = /(android)/i.test(navigator.userAgent);
        t && e.classList.add("ios"), a && e.classList.add("android");
    }),
    document.addEventListener("DOMContentLoaded", () => {
        if (document.querySelector("[data-swap-page]")) {
            let o = !1;
            const s = document.querySelector("[data-swap-page]"),
                r = document.querySelectorAll("[data-swap-button]"),
                l = document.querySelector('[data-swap-button="previous"]'),
                u = document.querySelector('[data-swap-button="next"]'),
                c = document.querySelector("title"),
                d = { previous: { content: "", title: "", prevUrl: "", nextUrl: "" }, next: { content: "", title: "", prevUrl: "", nextUrl: "" } };
            function e() {
                const e = new Date().getDate();
                sessionStorage.getItem("cacheDate") != e && (sessionStorage.clear(), sessionStorage.setItem("cacheDate", e));
            }
            async function t(e, t) {
                if (null !== sessionStorage.getItem(e)) a(e, t);
                else
                    try {
                        const s = await fetch(e),
                            r = await s.text();
                        n(e, new DOMParser().parseFromString(r, "text/html")), a(e, t);
                    } catch (i) {
                        o = !0;
                    }
            }
            function n(e, t) {
                const n = t.querySelector("[data-swap-page]").innerHTML,
                    a = t.querySelector("title").innerHTML,
                    i = t.querySelector('[data-swap-button="previous"]').href,
                    o = t.querySelector('[data-swap-button="next"]').href;
                sessionStorage.setItem(e, n), sessionStorage.setItem(e + "title", a), sessionStorage.setItem(e + "previous", i), sessionStorage.setItem(e + "next", o);
            }
            function a(e, t) {
                (d[t].content = sessionStorage.getItem(e)), (d[t].title = sessionStorage.getItem(e + "title")), (d[t].prevUrl = sessionStorage.getItem(e + "previous")), (d[t].nextUrl = sessionStorage.getItem(e + "next"));
            }
            function i(e) {
                s.classList.add("animate", e),
                    setTimeout(function () {
                        (s.innerHTML = d[e].content),
                            (c.innerHTML = d[e].title),
                            t(l.href, "previous"),
                            t(u.href, "next"),
                            s.classList.add("animate-finish"),
                            s.classList.remove("animate"),
                            window.scrollTo(0, 0),
                            setTimeout(function () {
                                s.classList.remove("animate-finish", e);
                            }, 120);
                    }, 120);
            }
            r.forEach((e) => {
                1 != o &&
                    e.addEventListener("click", (t) => {
                        if (sessionStorage.getItem(e.href)) {
                            t.preventDefault();
                            let n = e.getAttribute("data-swap-button");
                            history.pushState(null, null, e.href), (l.href = d[n].prevUrl), (u.href = d[n].nextUrl), i(n);
                        }
                    });
            }),
                document.addEventListener("keydown", (e) => {
                    37 == e.keyCode ? l.click() : 39 == e.keyCode && u.click();
                }),
                window.addEventListener("popstate", function () {
                    location.reload();
                }),
                e(),
                t(l.href, "previous"),
                t(u.href, "next");
        }
    }),


    window.addEventListener("load", () => {
        const e = document.querySelector("[data-detect-autoplay]");
        e &&
            setTimeout(function () {
                0 == e.currentTime && (e.controls = !0);
            }, 500);
    });

document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector("[data-style-header]");
    e &&
        window.addEventListener("scroll", () => {
            document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? e.classList.add("header--scrolled") : e.classList.remove("header--scrolled");
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector("[data-style-to-top]");
    e &&
        window.addEventListener("scroll", () => {
            document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? e.classList.add("to-top--scrolled") : e.classList.remove("to-top--scrolled");
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const l = document.querySelector('[data-lang]');
    l &&
        l.addEventListener("click", () => {
            if (getCookie("_compliance")) {
                window.event.preventDefault();
                languageChange(l.getAttribute("data-lang"));
                window.location = l.getAttribute('href');
            }
        });
});