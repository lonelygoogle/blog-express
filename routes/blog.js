/*
 * @Author: your name
 * @Date: 2020-05-08 23:38:14
 * @LastEditTime: 2020-05-09 08:43:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog-express\routes\blog.js
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.json({
      errno: 0,
      data: [1, 2, 3]
  })
});

router.get('/detail', function(req, res, next) {
  res.json({
      errno: 0,
      data: 'OK'
  })
});

module.exports = router;