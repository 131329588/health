// pages/changemy/changemy.js
const app =getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            name: '',
            age: '',
            height: ''
        },
    },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {

        },
        inputName: function (e) {
            this.setData({
                'userInfo.name': e.detail.value
            });
        },

        inputAge: function (e) {
            this.setData({
                'userInfo.age': e.detail.value
            });
        },

        inputHeight: function (e) {
            this.setData({
                'userInfo.height': e.detail.value
            });
        },

        saveUserInfo: function () {
            if (this.data.userInfo.name =='' || this.data.userInfo.age=='' || this.data.userInfo.height=='') {
                wx.showToast({
                  title: '信息填写不完整',
                  icon:'error'
                })
                return
            }
            // 将修改后的用户信息保存到全局和本地存储中
            const userInfo = this.data.userInfo;
            app.globalData.userinfo = userInfo; // 更新全局数据
            console.log("USERINFO IS ", this.data.userInfo);
            wx.setStorageSync('userinfo', userInfo); // 更新本地存储

            // 提示保存成功，并返回上一页
            wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 2000
            });
            wx.reLaunch({
              url: '../my/my',
            })
        },


        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow() {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide() {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload() {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh() {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom() {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage() {

        }
})