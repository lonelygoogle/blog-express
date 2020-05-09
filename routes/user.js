/*
 * @Author: your name
 * @Date: 2020-05-08 23:38:20
 * @LastEditTime: 2020-05-09 08:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog-express\routes\user.js
 */
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
router.post('/login', function(req, res, next) {
  const { username, password } = res.body
  res.json({
      errno: 0,
      data: {
        username,
        password
      }
  })
});



module.exports = router;