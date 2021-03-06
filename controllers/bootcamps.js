// @desc   Get all bootcamps
// @route  Get /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'GET all bootcamps'
    });
}

// @desc   Get a single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Get a bootcamp ${req.params.id}`
    });
}

// @desc   Create a new bootcamp
// @route  POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Create a bootcamp`
    });
}

// @desc   Update a bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Update bootcamp ${req.params.id}`
    });
}

// @desc   Update a bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete bootcamp ${req.params.id}`
    });
}