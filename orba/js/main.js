// 赞助档次切换功能
document.addEventListener('DOMContentLoaded', function () {
  const tierButtons = document.querySelectorAll('.tier-btn');
  const alipayQr = document.getElementById('alipay-qr');
  const wechatQr = document.getElementById('wechat-qr');

  if (!tierButtons.length || !alipayQr) return;

  tierButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      // 更新按钮状态
      tierButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const tier = this.dataset.tier;

      // 更新二维码（根据当前页面路径判断是项目页还是独立赞助页）
      const isProjectPage = window.location.pathname.includes('/projects/');
      const prefix = isProjectPage ? 'project-a-' : 'general-';

      alipayQr.src = `images/qr-codes/${prefix}${tier}-alipay.png`;
      wechatQr.src = `images/qr-codes/${prefix}${tier}-wechat.png`;
    });
  });
});