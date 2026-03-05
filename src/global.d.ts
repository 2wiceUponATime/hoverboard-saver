export {};

type Game = {
    pos: {
        x: number;
        y: number;
    };
    objects: {
        got: boolean;
    }[];
    opts: {
        onTick: (game: Game) => void;
    }
    _frameQueued: number | false;
    tick: () => void;
};

declare global {
    var browser: typeof chrome | undefined;

    interface Window {
        explorer: Game;
    }
}