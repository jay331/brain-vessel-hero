// js/tasks-main.js
// 這裡專門存放主線任務與大廳的設定資料

const MAIN_TASKS = {
  "hub_world": {
    roleName: "急救新星",
    intro: "恭喜完成初階訓練！🎉\n\n大門已為你敞開，現在你可以自由探索這座醫院，並向團隊接取進階任務喔！",
    missionText: "自由探索醫院",
    startPos: { x: 1500, y: -600 }, 
    npcs: [
      { id: 'npc_review',   name: '護理長',   color: '#ff9800', head: '#ffcc80', body: '#fff', pos: { x: 1350, y: -750 }, icon: '📜', dialogs: [{name: "護理長", text: "要重溫之前的訓練回憶嗎？隨時為你準備好。"}], action: 'ACTION_REVIEW' },
      { id: 'npc_guide',    name: '志工',     color: '#9c27b0', head: '#ce93d8', body: '#e1bee7', pos: { x: 1500, y: -750 }, icon: '💬', dialogs: [{name: "志工", text: "自由探索模式已解鎖！你可以到處逛逛，也可以搭電梯去 11 樓找找看有沒有什麼驚喜！"}], action: 'NONE' },
      { id: 'npc_continue', name: '主治醫師', color: '#4CAF50', head: '#a5d6a7', body: '#fff', pos: { x: 1650, y: -750 }, icon: '▶️', dialogs: [{name: "主治醫師", text: "大腦的救援從未停止。準備好接取今天的醫院探索任務了嗎？"}], action: 'ACTION_CONTINUE' }
    ]
  },
  "beg_id_0": {
    roleName: "實習醫師",
    playAs: "實習醫師"
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
  // 未來只要在這裡繼續往下加 "beg_id_2", "beg_id_3"... 即可
};
