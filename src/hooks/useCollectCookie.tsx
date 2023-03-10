import React, { useEffect } from 'react'
import axios from "axios";
import { useCookies } from "react-cookie";
import { useCallback } from 'react';

const useCollectCookie = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["user-info"]);

  const collectInfoHandler = useCallback(() => {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 24);
    axios.get("https://geolocation-db.com/json/").then((res) => {
      setCookie("user-info", [...cookie["user-info"], res.data], {
        path: "/",
        expires: expiration
      })
    });
  },[setCookie])
  
  useEffect(() => {
    collectInfoHandler();
  }, [collectInfoHandler, cookie]);
}

export default useCollectCookie