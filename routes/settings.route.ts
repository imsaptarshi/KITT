const router = require("express").Router();
const Settings = require("../models/settings.model");

router.route("/").get((req:any, res:any) => {
    Settings.find()
        .then((settings: any) => res.json(settings))
        .catch((err:any) => res.status(400).json({ error: err }));
});

router.route("/").post((req:any, res:any) => {
    const prefix = req.body.prefix;

    const newSettings = new Settings({
        prefix
    });

    newSettings.save()
        .then(() => {
            res.send({
                prefix,
                successfull: true
            });
        })
        .catch((err:any) => res.status(400).json({ error: err, successfull: false }));
});

router.route("/update").post((req:any, res:any) => {
    Settings.find()
        .then((settings:any) => {
            settings[0].prefix = req.body.prefix;
            settings[0].save()
                .then(() => {
                    res.send({
                        prefix: req.body.prefix,
                        updated: true
                    });
                });
        })
        .catch((err:any) => { res.send({ error: err, updated: false }); });
});

module.exports = router;