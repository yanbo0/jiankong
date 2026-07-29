import { PageConfig, WorkerConfig } from "./types";

// ==================== 页面配置 ====================
export const pageConfig: PageConfig = {
  title: "📋 政策监控",
  links: [
    { name: "政策导航", url: "https://yanbo0.github.io/daohang/" },
    { name: "GitHub项目", url: "https://github.com/yanbo0/jiankong" },
  ],
};

// ==================== 维护公告 ====================
export const maintenances: any[] = [];

// ==================== 状态页面配置 ====================
export const statusPages: any = {};

// ==================== 监控配置（最新75个政策网站） ====================
export const workerConfig: WorkerConfig = {
  monitors: [
    // ---------- 国家级（4个） ----------
    { id: "site-1", name: "工业和信息化部", url: "https://www.miit.gov.cn/index.html", method: "GET", type: "http" },
    { id: "site-2", name: "国家发展和改革委员会", url: "https://www.ndrc.gov.cn/", method: "GET", type: "http" },
    { id: "site-3", name: "国家卫生健康委员会", url: "http://www.nhc.gov.cn/", method: "GET", type: "http" },
    { id: "site-4", name: "科学技术部", url: "https://www.most.gov.cn/index.html", method: "GET", type: "http" },

    // ---------- 省级（18个） ----------
    { id: "site-5", name: "四川省国防科学技术工业办公室", url: "https://www.scjg.gov.cn/home.html", method: "GET", type: "http" },
    { id: "site-6", name: "四川省科学技术厅", url: "https://kjt.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-7", name: "四川省人力资源和社会保障厅", url: "http://rst.sc.gov.cn/rst/index.shtml", method: "GET", type: "http" },
    // ⭐ 重点关注：自贡市、德阳市、绵阳市、遂宁市、内江市、乐山市、眉山市、宜宾市
    { id: "site-8", name: "四川省职称评审系统 (重点关注通知/公示)", url: "http://103.203.218.251:8081/zcpsqd/home", method: "GET", type: "http" },
    { id: "site-9", name: "四川省经济和信息化厅", url: "http://jxt.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-10", name: "四川省发展和改革委员会", url: "http://fgw.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-11", name: "四川人才工作网", url: "http://www.scrcgz.com/", method: "GET", type: "http" },
    { id: "site-12", name: "四川省卫生健康委员会", url: "https://wsjkw.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-13", name: "四川省民政厅", url: "https://mzt.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-14", name: "四川省教育厅", url: "https://edu.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-15", name: "四川省商务厅", url: "https://swt.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-16", name: "四川省农业农村厅", url: "https://nynct.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-17", name: "四川省文化和旅游厅", url: "https://wlt.sc.gov.cn/scwlt/index.shtml", method: "GET", type: "http" },
    { id: "site-18", name: "四川省科学技术协会", url: "https://www.sckx.org.cn/", method: "GET", type: "http" },
    { id: "site-19", name: "四川省大数据中心", url: "https://www.scdsjzx.cn/", method: "GET", type: "http" },
    { id: "site-20", name: "四川省市场监督管理局", url: "https://scjgj.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-21", name: "四川省生态环境厅", url: "https://sthjt.sc.gov.cn/", method: "GET", type: "http" },
    { id: "site-22", name: "四川省知识产权保护中心", url: "https://scippc.cn/", method: "GET", type: "http" },

    // ---------- 市级（37个） ----------
    // 成都市级（15个）
    { id: "site-23", name: "成都市人力资源和社会保障局", url: "http://cdhrss.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-24", name: "成都市发展和改革委员会", url: "http://cddrc.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-25", name: "成都市民政局", url: "https://cdmzj.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-26", name: "成都市市场监督管理局", url: "https://scjg.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-27", name: "成都市科学技术协会", url: "https://www.cdkx.org.cn/?sessionid=#/official/home", method: "GET", type: "http" },
    { id: "site-28", name: "成都市科学技术局", url: "http://cdst.chengdu.gov.cn", method: "GET", type: "http" },
    { id: "site-29", name: "成都市商务局", url: "https://sww.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-30", name: "成都市文化广电旅游局", url: "https://cdwglj.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-31", name: "成都市卫生健康委员会", url: "https://cdwjw.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-32", name: "成都市经济和信息化局", url: "https://cdjx.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-33", name: "成都市教育局", url: "https://edu.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-34", name: "成都市农业农村局", url: "https://cdagri.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-35", name: "成都市投资促进局", url: "https://cdtc.chengdu.gov.cn/", method: "GET", type: "http" },
    { id: "site-36", name: "成都市社会组织和社工网", url: "https://cdnpo.cdszhmz.cn/", method: "GET", type: "http" },

    // 其他市级（22个）
    { id: "site-37", name: "重庆市科学技术局", url: "https://kjj.cq.gov.cn/", method: "GET", type: "http" },
    { id: "site-38", name: "绵阳市科学技术局", url: "https://kjj.my.gov.cn/", method: "GET", type: "http" },
    { id: "site-39", name: "绵阳市经济和信息化局", url: "https://jxj.my.gov.cn/", method: "GET", type: "http" },
    { id: "site-40", name: "绵阳市发展和改革委员会", url: "https://fgw.my.gov.cn/", method: "GET", type: "http" },
    { id: "site-41", name: "宜宾市科学技术局", url: "https://ybkj.yibin.gov.cn/", method: "GET", type: "http" },
    { id: "site-42", name: "宜宾市经济和信息化局", url: "https://jjhxxhj.yibin.gov.cn/", method: "GET", type: "http" },
    { id: "site-43", name: "宜宾市发展和改革委员会", url: "http://fg.yibin.gov.cn/", method: "GET", type: "http" },
    { id: "site-44", name: "达州市科学技术局", url: "http://kjj.dazhou.gov.cn/", method: "GET", type: "http" },
    { id: "site-45", name: "达州市经济和信息化局", url: "https://www.dazhou.gov.cn/xxgk-list-jxzhengce.html", method: "GET", type: "http" },
    { id: "site-46", name: "达州市发展和改革委员会", url: "https://fgw.dazhou.gov.cn/", method: "GET", type: "http" },
    { id: "site-47", name: "南充市科学技术局", url: "https://www.nanchong.gov.cn/kjj/", method: "GET", type: "http" },
    { id: "site-48", name: "南充市经济和信息化局", url: "https://www.nanchong.gov.cn/jxj/", method: "GET", type: "http" },
    { id: "site-49", name: "南充市发展和改革委员会", url: "https://www.nanchong.gov.cn/fgw/", method: "GET", type: "http" },
    { id: "site-50", name: "遂宁市科学技术局", url: "https://skjj.suining.gov.cn/index.html", method: "GET", type: "http" },
    { id: "site-51", name: "遂宁市经济和信息化局", url: "https://sjxj.suining.gov.cn/", method: "GET", type: "http" },
    { id: "site-52", name: "遂宁市发展和改革委员会", url: "https://sfzggw.suining.gov.cn/", method: "GET", type: "http" },
    { id: "site-53", name: "自贡市科学技术局", url: "https://www.zg.gov.cn/zgsrmzf/skjjzfxxg159/pc/list.html", method: "GET", type: "http" },
    { id: "site-54", name: "自贡市经济和信息化局", url: "https://www.zg.gov.cn/zgsrmzf/sjjhxxhwzfxxg121/pc/list.html", method: "GET", type: "http" },
    { id: "site-55", name: "自贡市发展和改革委员会", url: "https://www.zg.gov.cn/zgsrmzf/sfgwzfxxg101/pc/list.html", method: "GET", type: "http" },
    { id: "site-56", name: "泸州市科学技术局", url: "https://kjj.luzhou.gov.cn/", method: "GET", type: "http" },
    { id: "site-57", name: "泸州市经济和信息化局", url: "https://jxj.luzhou.gov.cn/", method: "GET", type: "http" },
    { id: "site-58", name: "泸州市发展和改革委员会", url: "https://fgw.luzhou.gov.cn/", method: "GET", type: "http" },

    // ---------- 区级（17个） ----------
    { id: "site-59", name: "高新区管理委员会", url: "http://www.cdht.gov.cn/", method: "GET", type: "http" },
    { id: "site-60", name: "天府新区管理委员会", url: "http://www.cdtf.gov.cn", method: "GET", type: "http" },
    { id: "site-61", name: "武侯区经济科技和信息化局", url: "https://www.cdwh.gov.cn/", method: "GET", type: "http" },
    { id: "site-62", name: "龙泉驿区新经济和科技局", url: "https://www.longquanyi.gov.cn/lqyqzfmhwz_gb/c129097/bm_xjj.shtml", method: "GET", type: "http" },
    { id: "site-63", name: "青羊区新经济和科技局", url: "http://www.cdqingyang.gov.cn/kjxj/bm_index.shtml", method: "GET", type: "http" },
    { id: "site-64", name: "崇州市经济科技和信息化局", url: "http://www.chongzhou.gov.cn/chongzhou/c138944/bm_jkxj.shtml", method: "GET", type: "http" },
    { id: "site-65", name: "成华区人民政府", url: "https://www.chenghua.gov.cn/", method: "GET", type: "http" },
    { id: "site-66", name: "新都区人民政府", url: "https://www.xindu.gov.cn/", method: "GET", type: "http" },
    { id: "site-67", name: "温江区人民政府", url: "https://www.wenjiang.gov.cn/service/", method: "GET", type: "http" },
    { id: "site-68", name: "双流区人民政府", url: "https://www.shuangliu.gov.cn/", method: "GET", type: "http" },
    { id: "site-69", name: "郫都区人民政府", url: "https://www.pidu.gov.cn/pidu/index.shtml", method: "GET", type: "http" },
    { id: "site-70", name: "蒲江县人民政府", url: "https://www.pujiang.gov.cn/pjxrmzf/c160193/zcwj.shtml", method: "GET", type: "http" },
    { id: "site-71", name: "武侯区人民政府", url: "https://www.cdwh.gov.cn/gkml/cdswhqxjjhkjjqjxj/xzgfxwj/column-index-1.shtml", method: "GET", type: "http" },
    { id: "site-72", name: "锦江区人民政府", url: "https://www.cdjinjiang.gov.cn/gkml/cdsjjqxjjhkjj/qtwj/column-index-1.shtml", method: "GET", type: "http" },
    { id: "site-73", name: "成华区人民政府", url: "https://www.chenghua.gov.cn/gkml/cdschqxjjhkjj/qtwj/column-index-1.shtml", method: "GET", type: "http" },
    { id: "site-74", name: "金牛区人民政府", url: "https://www.jinniu.gov.cn/gkml/cdsjnqjjhxxhj/qtwj/column-index-1.shtml", method: "GET", type: "http" },
    { id: "site-75", name: "金牛区科学技术局", url: "https://www.jinniu.gov.cn/gkml/cdsjnqxjjhkjj/qtwj/column-index-1.shtml", method: "GET", type: "http" },
  ],

  // ==================== 通知配置 ====================
  notification: {
    email: {
      from: "3534789914@qq.com",
      to: "3923361047@qq.com",
      smtp_host: "smtp.qq.com",
      smtp_port: 587,
      smtp_user: "3534789914@qq.com",
      smtp_password: "quyifohdmiuldabh",
    },
  },
};
