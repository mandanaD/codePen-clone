import {useState, useEffect} from "react";

const PREFIX = "codepen-clone-"
export default function LocalStorage (key, initialValue){
    const preFixedKey=PREFIX+key
    const [value,setValue]=useState(()=>{
        const jsonVal=localStorage.getItem(preFixedKey)
        if (jsonVal != null){
            return JSON.parse(jsonVal)
        }
        if (typeof initialValue==="function"){
            return initialValue()
        }else return initialValue
    })
    useEffect(()=>{
        localStorage.setItem(preFixedKey,JSON.stringify(value))
    },[preFixedKey,value])
    return [value,setValue]
}