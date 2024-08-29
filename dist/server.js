"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv = __importStar(require("dotenv"));
const app_1 = __importDefault(require("./src/app"));
dotenv.config();
// Read port to start server on from `.env`, otherwise default to port 3000
const PORT = process.env.API_URL || 3000;
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(PORT);
/**
 * Event listener for HTTP server "error" event.
 */
server.on('error', (err) => {
    if (err.syscall !== 'listen') {
        throw err;
    }
    switch (err.code) {
        case 'EACCES':
            console.error(`🦸🏻 Port ${PORT} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`🛑 Port ${PORT} is already in use`);
            process.exit(1);
            break;
        default:
            throw err;
    }
});
/**
 * Event listener for HTTP server "listening" event.
 */
server.on('listening', () => {
    console.log(`🧑🏻‍🍳 Yay, server started on http://localhost:${PORT}`);
});
