/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-19 10:34:59
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-22 01:44:11
 * @FilePath: \student-boot-front\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    port:9999,
  },
})
