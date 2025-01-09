import Player from "./Player";

export const Footer = () => {
    return (
        <div className="bg-lightest text-slate-100 fixed bottom-0 w-full p-2 flex items-center gap-2">
            <div className="square-24 bg-slate-100 mr-4 min-w-36 min-h-36">

            </div>
            <div className="flex w-full h-24">
                <Player />
            </div>
        </div>
    );
}