// pages/my/my.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo:{},
        punchDays:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 取出本地数据
        wx.getStorageSync({
            key:'healthData',
            success:(res) => {
                console.log("我的界面打卡信息取出成功！", res);
                this.setData({
                    punchDays:res.data.length
                })

            }, fail:(err) => {
                console.log("我的界面打卡信息取出失败！",err);
                wx.showToast({
                  title: '记录不存在！',
                  icon:'error'
                })
            }
        })
        console.log("app传递的信息", app.globalData.userinfo);
        // 获取用户信息
        this.setData({
            userinfo:app.globalData.userinfo
        })
    },
    // 前往修改信息页面
    goToModify: function() {
    wx.navigateTo({
      url: '../changemy/changemy',
    })
    },
    goClockin:function() {
        wx.navigateTo({
          url: '../clock/clock',
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