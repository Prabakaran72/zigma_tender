import { useEffect } from "react";

const usePageTitle = (title) => {
   useEffect(() => {
    document.getElementById("pageTitle").innerHTML = title; 
  },[title]);
};

export {usePageTitle};