import React from 'react'

import Script from 'dangerous-html/react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <div>
        <div className="app-component-container2">
          <Script
            html={`<script>
  "DOMContentLoaded",
    function () {
      const cookieBanner = document.getElementById("cookie-banner");
      const acceptButton = document.getElementById("accept-cookies");

      if (!getCookie("cookie-consent")) {
        cookieBanner.style.display = "block";
      }

      acceptButton.addEventListener("click", function () {
        setCookie("cookie-consent", "accepted", 365); // Set a cookie that expires in 365 days
        cookieBanner.style.display = "none";
      });
    };

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }
</script>
`}
          ></Script>
        </div>
      </div>
      <div className="app-component-container3">
        <div className="app-component-container4">
          <Script
            html={`<div id="cookie-banner" class="cookie-banner">
  <p>We use cookies to improve your experience on our website. <a href="/privacy-policy">Learn more</a></p>
  <button id="accept-cookies">Accept</button>
</div>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default AppComponent
