"use client"
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const Welcome = () => {
    const scrollToComponent = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to GastronoLab</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <Link href="#collectionTitle" className="btn btn-outline rounded-full border-white text-white hover:bg-red-800"  onClick={(e) => scrollToComponent(e, 'collectionTitle')}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;