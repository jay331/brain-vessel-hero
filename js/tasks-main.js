// js/tasks-main.js
// 這裡專門存放主線任務與大廳的設定資料

const MAIN_TASKS = {
  "hub_world": {
    roleName: "急救新星",
    intro: "恭喜完成初階訓練！🎉\n\n大門已為你敞開，現在你可以自由探索這座醫院，並向團隊接取進階任務喔！",
    missionText: "自由探索醫院",
    startPos: { x: 1500, y: -600 }, 
    npcs: [
      // ========== 原有 1F 大廳 NPC ==========
      { id: 'npc_review',   name: '護理長',   color: '#ff9800', head: '#ffcc80', body: '#fff', pos: { x: 1350, y: -750 }, icon: '📜', dialogs: [{name: "護理長", text: "要重溫之前的訓練回憶嗎？隨時為你準備好。"}], action: 'ACTION_REVIEW' },
      { id: 'npc_guide',    name: '志工',     color: '#9c27b0', head: '#ce93d8', body: '#e1bee7', pos: { x: 1500, y: -750 }, icon: '💬', dialogs: [{name: "志工", text: "自由探索模式已解鎖！你可以搭乘上方的電梯去各大樓層逛逛！"}], action: 'NONE' },
      { id: 'npc_continue', name: '主治醫師', color: '#4CAF50', head: '#a5d6a7', body: '#fff', pos: { x: 1650, y: -750 }, icon: '▶️', dialogs: [{name: "主治醫師", text: "大腦的救援從未停止。準備好接取今天的醫院探索任務了嗎？"}], action: 'ACTION_CONTINUE' },

      // ========== 1F 擴建房間 NPC ==========

// ========== 1F 擴建房間 NPC ==========
      // 休息室衣櫃 (移到房間左上角，不再擋住正中央通道)
      { id: 'npc_wardrobe', name: '更衣櫃', color: '#5d4037', head: 'transparent', body: 'transparent', pos: { x: 1380, y: -180 }, icon: '🚪', dialogs: [
        {name: "系統", text: "打開了專屬的員工衣櫃，準備換裝！"}
      ], action: 'ACTION_WARDROBE' },
      
      // 便利商店 (移到商店正中央偏上)
      { id: 'npc_store', name: '店長', color: '#4caf50', head: '#a5d6a7', body: '#e8f5e9', pos: { x: 650, y: -800 }, icon: '🏪', dialogs: [
        {name: "店長", text: "歡迎光臨！來挑一件帥氣的職業服裝吧！"}
      ], action: 'ACTION_STORE' },

      // 門診藥局 (移到藥局中央)
      { id: 'npc_pharmacy', name: '藥師', color: '#03a9f4', head: '#81d4fa', body: '#e1f5fe', pos: { x: 2350, y: -800 }, icon: '💊', dialogs: [
        {name: "藥師", text: "領藥請排隊！"},
        {name: "藥師", text: "中風病患一定要按時服藥控制血壓與血糖，千萬不能自己隨便停藥喔！"}
      ], action: 'NONE' },

      // 急診室 (移到急診室中央)
      { id: 'npc_er', name: '急診醫師', color: '#f44336', head: '#ef9a9a', body: '#ffebee', pos: { x: 2950, y: -800 }, icon: '🚑', dialogs: [
        {name: "急診醫師", text: "快！確認病患的 FAST 症狀，趕緊送去做電腦斷層掃描！時間就是大腦！"}
      ], action: 'NONE' },

      // ========== 各大樓層 NPC ==========
      // 2F 導管室
      { id: 'npc_cath', name: '放射師', color: '#9c27b0', head: '#ce93d8', body: '#f3e5f5', pos: { x: 3900, y: -900 }, icon: '☢️', dialogs: [
        {name: "放射師", text: "這裡是導管室，專門執行『動脈內取栓術』。請穿好鉛衣再來！"}
      ], action: 'NONE' },
      // 3F 手術室
      { id: 'npc_or', name: '麻醉師', color: '#009688', head: '#80cbc4', body: '#e0f2f1', pos: { x: 4900, y: -900 }, icon: '💤', dialogs: [
        {name: "麻醉師", text: "手術室準備完畢。出血性中風如果血塊太大，就需要神經外科進來開刀清除。"}
      ], action: 'NONE' },
      // 4F 復健室
      { id: 'npc_pt', name: '物理治療師', color: '#ffeb3b', head: '#fff59d', body: '#fffde7', pos: { x: 3900, y: -100 }, icon: '💪', dialogs: [
        {name: "物理治療師", text: "復健的黃金期是中風後的前六個月！來，跟著我一起做被動關節運動！"}
      ], action: 'NONE' },
      // 5F 神經加護病房
      { id: 'npc_icu', name: 'ICU護理師', color: '#e91e63', head: '#f48fb1', body: '#fce4ec', pos: { x: 4900, y: -100 }, icon: '🫀', dialogs: [
        {name: "ICU護理師", text: "加護病房病患生命徵象不穩，需要嚴密監控腦壓與血壓。請放低音量。"}
      ], action: 'NONE' },
      // 6F 教學室
      { id: 'npc_class', name: '臨床導師', color: '#795548', head: '#bcaaa4', body: '#efebe9', pos: { x: 3900, y: 700 }, icon: '👨‍🏫', dialogs: [
        {name: "臨床導師", text: "醫學知識日新月異，今天的個案討論會，大家都有看過病歷了嗎？"}
      ], action: 'NONE' },
      // 14F 衛教影片室
      { id: 'npc_edu', name: '個管師', color: '#00bcd4', head: '#81d4fa', body: '#e0f7fa', pos: { x: 4900, y: 700 }, icon: '🎬', dialogs: [
        {name: "個管師", text: "這裡有很多衛教影片，家屬有空可以多來看看，學習居家照護技巧。"}
      ], action: 'NONE' }
    ]
  },
  "beg_id_0": {
    roleName: "實習醫師",
    playAs: "實習醫師",
    intro: "就在半夢半醒之間\n你發現你居然一開場就中風了...\n\n躺在 11G 061 的病床上\n想起你的好朋友是這裡的實習醫師\n\n於是你用盡腦力，發出心電感應\n希望好朋友能來找到你...",
    missionText: "尋找剛中風的好友",
    startPos: { x: 2125, y: 1900 }, 
    npcs: [
      { id: 'patient', name: '病患', color: '#e57373', head: '#e57373', body: '#bbdefb', pos: { x: 2150, y: 920 }, icon: '🎯', dialogs: [
        { name: "我 (病患)", text: "你真的來了！我好像中風了，可是我根本不知道那是什麼..." },
        { name: "實習醫師", text: "別怕！我用最新的「醫學動畫平板」解釋給你聽，一看就懂！" }
      ], action: 'PLAY_ANIMATION' }
    ],
    gameUrl: "game_strokeis.html" 
  },
  "beg_id_1": {
    roleName: "實習醫生",
    intro: "醫生說中風治療需要一整個團隊的協助...\n你決定前往護理站，看看有哪些專業人員在幫忙。",
    missionText: "前往護理站尋找護理師",
    startPos: { x: 2150, y: 920 },    
    npcs: [
      { id: 'nurse', name: '護理師', color: '#ff9800', head: '#ffcc80', body: '#fff', pos: { x: 1350, y: 1280 }, icon: '🎯', dialogs: [
        { name: "我 (病患)", text: "請問除了醫生之外，還有誰會幫我評估病情呢？" },
        { name: "護理師", text: "我們有復健師、營養師組成的一支強大團隊喔！來看看這段介紹吧。" }
      ], action: 'PLAY_ANIMATION' }
    ],
    gameUrl: "game_name.html" 
  }
};
