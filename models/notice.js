var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var noticeSchema = new Schema({
title : { type: String, default: 'title' },
body : { type: String, default: 'notice here' },
din: { type: String, default:'date'}
date: { type: Date, default: Date.now }
});
var notice = mongoose.model('notice', noticeSchema);
module.exports= notice;
