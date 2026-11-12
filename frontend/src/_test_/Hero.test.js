
//this file and code is for testing  purpose all code here is for testing 

import React from "react";
import {render,screen } from "@testing-library/react";
import Hero from "../landingpage/home/Hero";
import "@testing-library/jest-dom";


describe("Hero component  ",()=>{
    test("render hero image",()=>{
        render(<Hero/>);
        const heroimage=screen.getByAltText("Hero Image");
        expect(heroimage).toBeInTheDocument();
        expect(heroimage).toHaveAttribute("src","media/images/homeHero.png")
    })
    // test("render sign up button ",()=>{
    //     render(<Hero/>);
    //     const signupnow=screen.getByRole("button",{name:" /Signup Now"});
    //     expect(signupnow).toBeInTheDocument();
    //     expect(signupnow).toHaveClass("btn-primary");
    // })
})
