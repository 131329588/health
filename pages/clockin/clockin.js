// pages/clockin/clockin.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '2024-06-19',
        weight: '',
        physicalStatus: '',
        mentalStatus: '',
        sleepTime: '',
        exerciseStatus: '',
        healthData: [],
        locallist: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var today = new Date(); // 创建一个新的日期对象，默认为当前日期和时间
        var year = today.getFullYear(); // 获取当前年份
        var month = today.getMonth() + 1; // 获取当前月份，注意月份是从 0 开始的，所以需要加 1
        var day = today.getDate(); // 获取当前是几号

        // 如果需要格式化输出，可以按照需要拼接成字符串
        var formattedDate = year + '-' + month + '-' + day;
        this.setData({
            date: formattedDate
        })

        // 本地取出数据列表，然后再存储
        wx.getStorage({
            key: 'healthData',
            success: (res) => {
                console.log("信息取出成功", res);
                this.data.locallist = res.data
                console.log("赋值后的locallist", this.data.locallist);
            },
            fail: (err) => {
                console.log("信息取出失败", err);
            }
        })

    },

    // 输入体重
    inputWeight(e) {
        this.setData({
            weight: e.detail.value
        });
    },

    // 输入身体状态
    inputPhysicalStatus(e) {
        this.setData({
            physicalStatus: e.detail.value
        });
    },

    // 输入心理状态
    inputMentalStatus(e) {
        this.setData({
            mentalStatus: e.detail.value
        });
    },

    // 输入睡眠时间
    inputSleepTime(e) {
        this.setData({
            sleepTime: e.detail.value
        });
    },

    // 输入运动状况
    inputExerciseStatus(e) {
        this.setData({
            exerciseStatus: e.detail.value
        });
    },
    // 提交按钮
    submitForm: function () {
        if (this.data.weight == '' || this.data.date == '' || this.data.physicalStatus == '' || this.data.mentalStatus == '' || this.data.sleepTime == '' || this.data.exerciseStatus == '') {
            wx.showToast({
                title: '信息填写不完整',
                icon: 'error'
            })
            return
        }
        // 检测用户是否已经填写用户信息
        if (!app.globalData.userinfo) {
            wx.showModal({
                title: '提示',
                content: '请先填写个人信息！',
                complete: (res) => {
                    if (res.cancel) {
                        wx.navigateTo({
                            url: '../changemy/changemy',
                        })
                    }

                    if (res.confirm) {
                        wx.navigateTo({
                            url: '../changemy/changemy',
                        })
                    }
                }
            })
            return
        }
        // 检测今日是否已打卡
        if (this.data.locallist.length > 0) {
            console.log("开始检测是否已经打卡");
            for (let i = 0; i < this.data.locallist.length; i++) {
                const element = this.data.locallist[i];
                console.log(element);
                if (element.date == this.data.date) {
                    wx.showToast({
                        title: '今日已打卡',
                        icon: 'error'
                    })
                    this.setData({
                        weight: '',
                        physicalStatus: '',
                        mentalStatus: '',
                        sleepTime: '',
                        exerciseStatus: '',
                    })
                    return
                }

            }
        }

        this.data.healthData.push({
            weight: this.data.weight,
            date: this.data.date,
            physicalStatus: this.data.physicalStatus,
            mentalStatus: this.data.mentalStatus,
            sleepTime: this.data.sleepTime,
            exerciseStatus: this.data.exerciseStatus
        })
        console.log("构建后的healthdata", this.data.healthData);

        //存储信息
        wx.setStorage({
            key: 'healthData',
            data: this.data.locallist.concat(this.data.healthData),
            success: (res2) => {
                console.log("打卡信息存储成功", res2);
                wx.showToast({
                    title: '打卡成功！',
                    icon: 'success'
                })
                this.onLoad()

            },
            fail: (err2) => {
                console.log("打卡信息存储失败", err2);
                wx.showToast({
                    title: '打卡失败！',
                    icon: 'error'
                })

            },
            complete: () => {
                this.setData({
                    weight: '',
                    physicalStatus: '',
                    mentalStatus: '',
                    sleepTime: '',
                    exerciseStatus: '',
                })
            }
        })

    },

    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
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