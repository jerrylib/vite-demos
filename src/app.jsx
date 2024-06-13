import React from 'react';
import { createRoot } from "react-dom/client"

// === Components === //
import Header from '@/components/Header'

// === Routers === //
import { Routes } from '@generouted/react-router'


// === Utils === //
import { ConfigCatProvider, createConsoleLogger, LogLevel } from "configcat-react";

export default function App() {
    const logger = createConsoleLogger(LogLevel.Info);
    return <ConfigCatProvider sdkKey="configcat-sdk-1/14rcCMqp50uPUgy5eCvUyw/-k6vM5sMqkeclHw9_e9lUA" options={{ logger }}>
        <Header />
        <Routes />
    </ConfigCatProvider>


}