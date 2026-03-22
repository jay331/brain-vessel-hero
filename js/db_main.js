// js/db_main.js
// 這裡存放主系統所有的靜態資料（包含角色、任務清單、自評量表等）

const TOTAL_BEG_TASKS = 25;

const GAME_URLS = { 
  'beg_id_0': 'game_strokeis.html', 
  'beg_id_1': 'game_name.html', 
  'role_emt_0': 'game_race_lev1.html', 
  'role_dr_0': 'game_shoot_lev1.html', 
  'role_nurse_0': 'game_match_lev1.html', 
  'role_nusse_0': 'game_match_lev2.html' 
};

const ROLES_DATA_BEG = [
  { id: 'beg_id', name: '中風補習班', subtitle: '一定要知道的', icon: '🧠', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 什麼是腦中風 ?', '2. 認識中風團隊人員', '3. 中風常見檢查項目', '4. 中風常見治療項目', '5. 完成您專屬的中風名片'],cardDesc: [
      "中風常見的症狀包括：<br>1. 臉部不對稱 (Face)<br>2. 手臂無力 (Arm)<br>3. 說話含糊 (Speech)<br>千萬不可忽視！",
      "記錄發病時間非常重要！<br>因為這會決定醫師是否能施打『靜脈血栓溶解劑』(黃金 4.5 小時內)。",
      "遇到疑似中風，請『立刻撥打 119』，切勿自行開車送醫，以免延誤黃金搶救時間。",
      "在等待救護車時，請協助病患側臥，保持呼吸道暢通，並鬆開緊繃的衣物。",
      "病患當下通常會非常恐慌，家屬的陪伴與冷靜安撫是穩定生命徵象的關鍵。"
    ] }, 
  { id: 'beg_hosp', name: '住院須知', subtitle: '急性期', icon: '🏥', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 認識影像檢查', '2. 抽血與點滴目的', '3. 防跌倒與床欄', '4. 吞嚥與安全飲食', '5. 認識醫療團隊'] }, 
  { id: 'beg_care', name: '基礎照護', subtitle: '病房起居', icon: '🤲', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 協助翻身拍背', '2. 管路日常注意', '3. 安全上下床技巧', '4. 患側先穿健側脫', '5. 輪椅助行器認識'] }, 
  { id: 'beg_rehab', name: '復健入門', subtitle: '早期活動', icon: '💪', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 被動關節活動', '2. 良姿位擺位原則', '3. 床邊坐站平衡', '4. 預防關節攣縮', '5. 鼓勵使用患側'] }, 
  { id: 'beg_home', name: '返家準備', subtitle: '長期抗戰', icon: '🏡', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 認識危險因子', '2. 規律服藥不擅停', '3. 居家環境防跌', '4. 血壓血糖量測', '5. 申請長照資源'] }
];

const ROLES_DATA_ADV = [
  { id: 'role_emt', name: 'EMT', subtitle: '院前識別', icon: '🚑', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 基礎駕駛與鳴笛', '2. 閃避車流', '3. 惡劣天候', '4. 路口判斷', '5. 極限護送'] }, 
  { id: 'role_dr', name: '取栓專家', subtitle: '血管再通', icon: '🩺', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 導管操作', '2. 尋找阻塞', '3. 突破血栓', '4. 支架釋放', '5. 血流再通'] }, 
  { id: 'role_nurse', name: '護理師', subtitle: '急診護理', icon: '💉', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 生命徵象', '2. FAST指標', '3. 給藥準備', '4. 狀況排除', '5. 急診調度'] }, 
  { id: 'role_pt', name: '復健師', subtitle: '復健訓練', icon: '🦾', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 活動評估', '2. 翻身訓練', '3. 平衡考驗', '4. 步態矯正', '5. 功能重建'] }, 
  { id: 'role_diet', name: '營養師', subtitle: '健康飲食', icon: '🥗', totalTasks: 5, currentTask: 1, dailyAttempts: 5, subTasks: ['1. 地中海飲食', '2. 優質蛋白', '3. 避開高鈉', '4. 吞嚥餐食', '5. 菜單設計'] }
];

const scaleQuestions = [
  { id: 'mrs', title: '1/7 mRS 失能評估', type: 'choice', options: [
    { val: 0, icon: '🏃', text: '0 - 完全無症狀' }, { val: 1, icon: '🚶', text: '1 - 有症狀無明顯失能' }, { val: 2, icon: '🧹', text: '2 - 輕度失能(可自理)' }, { val: 3, icon: '🦯', text: '3 - 中度失能(需協助)' }, { val: 4, icon: '🦽', text: '4 - 中重度失能' }, { val: 5, icon: '🛌', text: '5 - 重度失能(臥床)' }
  ]},
  { id: 'eq1', title: '2/7 行動能力', type: 'choice', options: [
    { val: 1, icon: '😁', text: '沒有困難' }, { val: 2, icon: '🙂', text: '有一點困難' }, { val: 3, icon: '😐', text: '中度困難' }, { val: 4, icon: '😟', text: '嚴重困難' }, { val: 5, icon: '♿', text: '無法走動' }
  ]},
  { id: 'eq2', title: '3/7 自我照顧', type: 'choice', options: [
    { val: 1, icon: '👕', text: '沒有困難' }, { val: 2, icon: '🙂', text: '有一點困難' }, { val: 3, icon: '😐', text: '中度困難' }, { val: 4, icon: '😟', text: '嚴重困難' }, { val: 5, icon: '🆘', text: '無法自理' }
  ]},
  { id: 'eq3', title: '4/7 日常活動', type: 'choice', options: [
    { val: 1, icon: '💼', text: '没有困难' }, { val: 2, icon: '🙂', text: '有一點困難' }, { val: 3, icon: '😐', text: '中度困难' }, { val: 4, icon: '😟', text: '严重困难' }, { val: 5, icon: '🚫', text: '無法進行' }
  ]},
  { id: 'eq4', title: '5/7 疼痛/不舒服', type: 'choice', options: [
    { val: 1, icon: '🟢', text: '沒有疼痛' }, { val: 2, icon: '🟡', text: '有一點' }, { val: 3, icon: '🟠', text: '中度' }, { val: 4, icon: '🔴', text: '嚴重' }, { val: 5, icon: '🔥', text: '極度疼痛' }
  ]},
  { id: 'eq5', title: '6/7 焦慮/沮喪', type: 'choice', options: [
    { val: 1, icon: '🌞', text: '沒有焦慮' }, { val: 2, icon: '⛅', text: '有一點' }, { val: 3, icon: '🌧️', text: '中度' }, { val: 4, icon: '⛈️', text: '嚴重' }, { val: 5, icon: '🌪️', text: '極度焦慮' }
  ]},
  { id: 'vas', title: '7/7 視覺模擬量表', type: 'slider' }
];
