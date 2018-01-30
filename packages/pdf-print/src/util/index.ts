import { Chromeless } from 'chromeless'

export interface IPrintOpts {
     urls: string[];
 }


export async function print(opts: IPrintOpts): Promise<string[] | void> {
    try {
        const chromeless = new Chromeless();
        const screenshotsX: Array<Promise<string>> = 
            opts.urls.map(async (url) => {
                const screenshot = await chromeless
                    .goto(url)
                    .pdf({landscape:true})
                return screenshot;
            });
        const screenshots = Promise.all(screenshotsX);
        await chromeless.end();
        return screenshots;
    } catch (error) {
        console.error(error);
    }
}

