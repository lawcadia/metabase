import React, { Component } from "react";
import MetabaseAnalytics from "metabase/lib/analytics";
import Cookies from "js-cookie";
import { t } from "ttag";

const cookiesOptions = {
  path: window.MetabaseRoot || "/",
  expires: 365,
  secure: window.location.protocol === "https:",
  sameSite: "LAX"
};

export default class LawcadiaSession extends Component {

  authViaSessionID(token) {
    try {
      MetabaseAnalytics.trackEvent("Auth", "Login");
      Cookies.set('metabase.SESSION', token, cookiesOptions);
    } catch (e) {
      console.error("Cannot set metabase session:", e);
    }
  }

  componentDidMount()
  {
    const token = this.props.location.query.token;
    const redirect = this.props.location.query.redirect
    console.log(token);
    console.log(redirect);
    if(token){
      this.authViaSessionID(token);
    }
    window.location.href = redirect;
  }

  render() {
    return (
      <div className="relative z2 text-centered" style={{ maxWidth: 550, margin: 'auto' }}>
        <h1 style={{ fontSize: "2.2rem" }} className="text-brand" >{t`Redirecting to Lawcadia Metabase`}</h1>
        <p className="text-body">{t`Looks like everything is working. Please wait for a minute to connect to your account, and start finding you some awesome answers!`}</p>
      </div>
    );
  }
}
