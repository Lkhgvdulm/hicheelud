exports.getHome_Banners = (req,res,next) =>{
    res.status(200).json({
        success: true,
        data: "Home banners"
    });
};

exports.getHome_Banner = (req,res,next) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id}`,

    });
};

exports.createHome_Banner = (req,res,next) =>{
    res.status(200).jsom({
        success: true,
        data: "Home banner uusgeh"
    });
};

exports.updateHome_Banner = (req,res,next) => {
    res.status(200).json({
        success:true,
        data: `${req.params.id}`,
    });
};
exports.deleteHome_Banner = (req,res,next) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id}`,
    });
};