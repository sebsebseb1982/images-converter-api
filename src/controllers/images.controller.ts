import {Request, Response} from "express";
import Jimp from "jimp";

export default class ImagesController {
    async convert(req: Request, res: Response) {
        try {
            let imageToConvertUrl = req.params.imageToConvertUrl;
            let convertTo = req.query.convertTo;
            let width:number = parseInt(req.query.width as string);
            let height:number = parseInt(req.query.height as string);
            console.log(`imageToConvertUrl=${imageToConvertUrl}`);
            console.log(`convertTo=${convertTo}`);
            console.log(`width=${width}`);
            console.log(`height=${height}`);

            await Jimp.read(imageToConvertUrl)
                .then((image: Jimp) => {
                    console.log(`l'image ${imageToConvertUrl} a été téléchargée`);

                    return image
                        .resize(width, height)
                        .writeAsync(`output.${convertTo}`);
                })
                .catch((err) => {
                    console.error(err);
                })
                .then(() => {
                    res.download(`output.${convertTo}`);
                });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }
}
