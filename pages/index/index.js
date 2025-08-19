Page({
  data: {
    gridItems: [
      { id: 'reservation', title: '在线预约', desc: '随时约护肤', emoji: '📅' },
      { id: 'newcomer', title: '新客专区', desc: '惊喜到访礼', emoji: '🎁' },
      { id: 'member', title: '会员福利', desc: '会员专属权益', emoji: '👑' },
      { id: 'points', title: '积分好礼', desc: '兑换心仪产品', emoji: '✨' },
      { id: 'recommend', title: '推荐有礼', desc: '会员尊享特权', emoji: '💞' },
      { id: 'service', title: '护肤档案', desc: '记录管理方案', emoji: '📝' }
    ]
  },

  onGridTap(e) {
    const id = e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.id;
    if (!id) return;
    wx.showToast({ title: `点击了 ${id}`, icon: 'none' });
  }
});

