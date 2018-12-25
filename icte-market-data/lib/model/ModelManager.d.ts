import { Parser } from "../parser/Parser";
import { RealtimeModel } from "./RealtimeModel";
import { Symbols } from "./Symbols";
export declare class ModelManager {
    private time;
    private benchModel;
    private reactModel;
    private timerModel;
    private symbols;
    constructor();
    connect: () => void;
    getModelTime: () => number;
    private setModelTime;
    getGmtZeroMidnight: () => number;
    findSymbol: (symbol: string) => number;
    getUpdate: () => Symbols;
    setUpdate: (data: Parser) => void;
    private updateTime;
    private updateLockCalc;
    private updateCalc;
    private updateLevel1;
    private updateQuote;
    private updateBuy;
    private updateSell;
    private updateBid;
    private updateAsk;
    private updateRate;
    wrap: (fromModel: RealtimeModel, toModel: RealtimeModel) => void;
}