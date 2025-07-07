// 질문 데이터
const questions = [
    {
        id: 1,
        question: "영화의 첫 장면, 당신은 어디에 있습니까?",
        options: [
            { text: "도시 전경이 내려다보이는 옥상, 다음 행동을 조용히 계획 중이다.", scores: { A: 2, I: 1 } },
            { text: "환하게 웃으며 친구들과 술을 마시고 있다.", scores: { S: 2, E: 1 } },
            { text: "컴퓨터 앞, 한밤중까지 혼자 남아 무언가를 해킹하고 있다.", scores: { A: 1, I: 2 } },
            { text: "병실, 누군가의 손을 잡고 조용히 이야기를 건넨다.", scores: { E: 2, S: 1 } }
        ]
    },
    {
        id: 2,
        question: "깊은 배신을 당한 당신, 어떻게 반응합니까?",
        options: [
            { text: "감정을 철저히 통제하며 상대의 약점을 분석한다.", scores: { A: 2, I: 1 } },
            { text: "분노를 억누르지 못하고 감정적으로 폭발한다.", scores: { E: 2, S: 1 } },
            { text: "스스로에게 문제를 되묻고 조용히 거리를 둔다.", scores: { I: 2, A: 1 } },
            { text: "그럼에도 상대를 이해하려 노력한다.", scores: { E: 1, S: 2 } }
        ]
    },
    {
        id: 3,
        question: "당신의 이야기에 OST가 깔린다면, 어떤 음악일까요?",
        options: [
            { text: "낮은 첼로와 긴장감 넘치는 드럼", scores: { A: 2, I: 1 } },
            { text: "격정적인 피아노와 전자음", scores: { E: 2, S: 1 } },
            { text: "느리게 반복되는 로맨틱 멜로디", scores: { E: 1, I: 2 } },
            { text: "몽환적인 기타 리프와 잔잔한 현악기", scores: { I: 2, A: 1 } }
        ]
    },
    {
        id: 4,
        question: "생사의 기로에 선 누군가가 당신에게 도움을 요청한다면?",
        options: [
            { text: "냉정하게 판단 후, 감정이 아닌 상황을 따진다.", scores: { A: 2, I: 1 } },
            { text: "그를 지키기 위해 어떤 위험도 감수한다.", scores: { E: 2, S: 1 } },
            { text: "상대를 신뢰하기 전에 먼저 질문한다.", scores: { A: 1, I: 2 } },
            { text: "고민은 짧게, 본능적으로 뛰어든다.", scores: { E: 1, S: 2 } }
        ]
    },
    {
        id: 5,
        question: "당신의 약점을 스스로 정의해본다면?",
        options: [
            { text: "너무 많은 걸 통제하려 든다.", scores: { A: 2, I: 1 } },
            { text: "감정의 폭이 너무 넓고 깊다.", scores: { E: 2, I: 1 } },
            { text: "사람을 잘 믿지 못한다.", scores: { I: 2, A: 1 } },
            { text: "모든 책임을 스스로 짊어진다.", scores: { E: 1, S: 2 } }
        ]
    },
    {
        id: 6,
        question: "싸움이 벌어졌다, 당신은 어떤 역할을 맡을까요?",
        options: [
            { text: "전장 뒤편에서 전체 전략을 설계한다.", scores: { A: 2, I: 1 } },
            { text: "가장 먼저 돌격하며 위협을 무릅쓴다.", scores: { E: 2, S: 1 } },
            { text: "혼자 조용히 우회로를 찾아 침투한다.", scores: { I: 2, A: 1 } },
            { text: "다친 사람들을 살피며 구호 활동에 나선다.", scores: { E: 1, S: 2 } }
        ]
    },
    {
        id: 7,
        question: "세상이 무너진다면, 당신은 어디에 있을까요?",
        options: [
            { text: "모든 사람을 위한 비상계획을 가동 중이다.", scores: { A: 2, S: 1 } },
            { text: "가족을 지키기 위해 외로운 싸움을 벌이고 있다.", scores: { E: 2, I: 1 } },
            { text: "홀로 살아남기 위한 생존 루트를 이미 확보해놨다.", scores: { A: 1, I: 2 } },
            { text: "타인을 설득하고 조직하며 함께 대피 중이다.", scores: { S: 2, E: 1 } }
        ]
    },
    {
        id: 8,
        question: "당신이 가장 공감하는 영화 대사 스타일은?",
        options: [
            { text: "\"모든 건 계획대로 움직이고 있어.\"", scores: { A: 2, I: 1 } },
            { text: "\"내가 이렇게 된 건, 다 이유가 있어.\"", scores: { E: 2, I: 1 } },
            { text: "\"말하지 않아도, 서로의 마음은 알 수 있어.\"", scores: { E: 1, I: 2 } },
            { text: "\"작은 용기 하나가 세상을 바꾼다.\"", scores: { S: 2, E: 1 } }
        ]
    },
    {
        id: 9,
        question: "무대가 당신의 삶이라면, 당신은 어떤 조명 아래에 있을까요?",
        options: [
            { text: "어두운 배경에 한 줄기 백색 빛", scores: { A: 2, I: 1 } },
            { text: "강렬한 붉은 네온과 그림자", scores: { E: 2, S: 1 } },
            { text: "따뜻한 노란 조명과 배경 음악", scores: { E: 1, S: 2 } },
            { text: "은은한 파란 조명, 뒤에 긴 실루엣", scores: { I: 2, A: 1 } }
        ]
    },
    {
        id: 10,
        question: "당신이 가장 많이 되풀이하는 행동 패턴은?",
        options: [
            { text: "계획, 기록, 분석", scores: { A: 2, I: 1 } },
            { text: "회상, 격정, 독백", scores: { E: 2, I: 1 } },
            { text: "관찰, 거리두기, 실행", scores: { A: 1, I: 2 } },
            { text: "경청, 공감, 배려", scores: { E: 1, S: 2 } }
        ]
    },
    {
        id: 11,
        question: "당신이 가장 동경하는 주인공의 모습은?",
        options: [
            { text: "모든 걸 이성적으로 꿰뚫는 천재", scores: { A: 2, I: 1 } },
            { text: "고통 속에서도 인간미를 잃지 않는 사람", scores: { E: 2, S: 1 } },
            { text: "유쾌하지만 진심은 잘 안 보이는 인물", scores: { I: 2, S: 1 } },
            { text: "모두가 떠날 때, 끝까지 남는 사람", scores: { E: 1, S: 2 } }
        ]
    },
    {
        id: 12,
        question: "어둠 속에서 당신은 어떤 선택을 할까요?",
        options: [
            { text: "어둠 자체를 활용한다.", scores: { A: 2, I: 1 } },
            { text: "스스로를 희생해서 빛을 만든다.", scores: { E: 2, S: 1 } },
            { text: "빛나는 누군가를 따라간다.", scores: { E: 1, I: 2 } },
            { text: "어둠 속에서도 타인을 품는다.", scores: { S: 2, E: 1 } }
        ]
    },
    {
        id: 13,
        question: "당신이 쓰는 대본의 마지막 장은?",
        options: [
            { text: "절제된 감정과 완벽한 결말", scores: { A: 2, I: 1 } },
            { text: "뜨거운 고백과 슬픈 여운", scores: { E: 2, I: 1 } },
            { text: "복잡한 반전과 열린 결말", scores: { A: 1, I: 2 } },
            { text: "잔잔한 미소와 작별 인사", scores: { E: 1, S: 2 } }
        ]
    },
    {
        id: 14,
        question: "대중 앞에 선 당신, 어떤 표정을 짓습니까?",
        options: [
            { text: "무표정 속의 미세한 미소", scores: { A: 2, I: 1 } },
            { text: "도발적인 눈빛과 짓궂은 말투", scores: { E: 2, S: 1 } },
            { text: "친근한 얼굴과 침묵", scores: { I: 2, S: 1 } },
            { text: "서글서글한 웃음과 떨리는 눈빛", scores: { E: 1, S: 2 } }
        ]
    },
    {
        id: 15,
        question: "마지막 엔딩 크레딧, 당신은 어떤 이름으로 남고 싶습니까?",
        options: [
            { text: "\"설계자\"", scores: { A: 2, I: 1 } },
            { text: "\"불꽃\"", scores: { E: 2, S: 1 } },
            { text: "\"유령\"", scores: { I: 2, A: 1 } },
            { text: "\"빛\"", scores: { E: 1, S: 2 } }
        ]
    }
];

// 결과 데이터
const results = [
    {
        id: 1,
        icon: "🧠",
        name: "냉정한 전략가",
        subtitle: "토니 스타크 (아이언맨)",
        description: "감정 뒤에 숨은 초정밀 시뮬레이터. 당신은 모든 상황을 분석하고 최적의 해결책을 찾는 천재입니다.",
        criteria: { A: [25, 35], S: [15, 25] }
    },
    {
        id: 2,
        icon: "🦇",
        name: "고독한 정의주의자",
        subtitle: "브루스 웨인 (다크나이트)",
        description: "빛보다 어둠 속에서 정의를 실현하는 사람. 혼자서도 세상을 지킬 수 있는 강인한 의지를 가졌습니다.",
        criteria: { A: [25, 35], I: [20, 30] }
    },
    {
        id: 3,
        icon: "🐍",
        name: "이중인격 파괴자",
        subtitle: "조커 (조커)",
        description: "혼돈을 예술로 만드는 존재. 예측 불가능하지만 나름의 철학을 가진 복잡한 인물입니다.",
        criteria: { S: [25, 35], E: [25, 35] }
    },
    {
        id: 4,
        icon: "❤️",
        name: "순애보 로맨티스트",
        subtitle: "노아 (노트북)",
        description: "한 사람만 바라보는 영화 같은 사랑. 진실한 감정과 헌신으로 사랑을 완성하는 로맨티스트입니다.",
        criteria: { E: [25, 35], S: [15, 25] }
    },
    {
        id: 5,
        icon: "🧙",
        name: "신비한 안내자",
        subtitle: "간달프 (반지의 제왕)",
        description: "말은 적지만 흐름은 읽는 지혜자. 다른 이들을 올바른 길로 인도하는 현명한 멘토입니다.",
        criteria: { A: [20, 30], S: [15, 25], I: [15, 25] }
    },
    {
        id: 6,
        icon: "🧬",
        name: "천재 해커형",
        subtitle: "리스 (매트릭스)",
        description: "세상과 단절돼 있지만, 본질은 꿰뚫는 사람. 진실을 찾기 위해 끊임없이 탐구합니다.",
        criteria: { A: [25, 35], I: [25, 35] }
    },
    {
        id: 7,
        icon: "☠️",
        name: "복수의 화신",
        subtitle: "존 윅",
        description: "상실로부터 시작된 냉혈 복수의 아이콘. 목표를 위해서라면 어떤 장애물도 뚫고 나갑니다.",
        criteria: { I: [25, 35], A: [20, 30] }
    },
    {
        id: 8,
        icon: "🔥",
        name: "감정형 투사",
        subtitle: "킬빌 (킬빌)",
        description: "상처를 연료로, 감정을 무기로 삼다. 강렬한 감정으로 모든 것을 불태우는 전사입니다.",
        criteria: { E: [30, 40], I: [15, 25] }
    },
    {
        id: 9,
        icon: "🕵️",
        name: "분석형 추리광",
        subtitle: "셜록 (셜록 홈즈)",
        description: "감정 대신 증거로 세상을 해석하는 자. 논리와 관찰력으로 모든 미스터리를 해결합니다.",
        criteria: { A: [30, 40], I: [20, 30] }
    },
    {
        id: 10,
        icon: "💼",
        name: "카리스마 리더",
        subtitle: "미란다 프리슬리 (악마는 프라다를 입는다)",
        description: "냉철한 현실주의와 고급 취향의 정점. 완벽함을 추구하며 다른 이들을 이끄는 리더입니다.",
        criteria: { A: [25, 35], S: [20, 30] }
    },
    {
        id: 11,
        icon: "🎤",
        name: "예술적 자유인",
        subtitle: "프레디 머큐리 (보헤미안 랩소디)",
        description: "틀을 부수고 무대를 뒤흔드는 존재감. 자유로운 영혼으로 예술을 통해 세상과 소통합니다.",
        criteria: { E: [25, 35], S: [25, 35] }
    },
    {
        id: 12,
        icon: "🤖",
        name: "감성형 인공지능",
        subtitle: "월-E (월-E)",
        description: "말보다 행동으로 마음을 전하는 로봇. 순수한 마음으로 세상을 따뜻하게 만듭니다.",
        criteria: { E: [25, 35], I: [20, 30] }
    },
    {
        id: 13,
        icon: "🧛",
        name: "그림자 속 외톨이",
        subtitle: "에드워드 (트와일라잇)",
        description: "가까이하기엔 너무 고독한 영혼. 신비로운 매력으로 다른 이들을 끌어당기지만 거리를 둡니다.",
        criteria: { I: [30, 40], E: [15, 25] }
    },
    {
        id: 14,
        icon: "🎯",
        name: "완벽한 설계자",
        subtitle: "닐 (인셉션)",
        description: "현실과 환상을 조종하는 메타 전략가. 복잡한 계획을 완벽하게 실행하는 마스터마인드입니다.",
        criteria: { A: [30, 40], I: [25, 35] }
    },
    {
        id: 15,
        icon: "🐶",
        name: "유쾌한 단짝 주인공",
        subtitle: "돈키 (슈렉)",
        description: "영화는 너 없인 심심해. 밝은 에너지로 주변을 즐겁게 만드는 분위기 메이커입니다.",
        criteria: { S: [30, 40], E: [20, 30] }
    },
    {
        id: 16,
        icon: "🚀",
        name: "가족을 위한 우주인",
        subtitle: "쿠퍼 (인터스텔라)",
        description: "모든 차원을 넘어 가족을 향해 나아가는 이. 사랑하는 사람들을 위해 불가능에 도전합니다.",
        criteria: { S: [20, 30], E: [20, 30], A: [15, 25] }
    },
    {
        id: 17,
        icon: "🧛",
        name: "야성적 로맨티스트",
        subtitle: "잭 (타이타닉)",
        description: "즉흥 속에서도 사랑은 진심이었다. 자유로운 영혼으로 진정한 사랑을 보여주는 낭만주의자입니다.",
        criteria: { E: [25, 35], S: [20, 30] }
    },
    {
        id: 18,
        icon: "🧩",
        name: "인간적인 빌런",
        subtitle: "타노스 (어벤져스)",
        description: "잔인하지만 흔들리지 않는 목적주의자. 자신만의 신념으로 세상을 바꾸려는 복잡한 인물입니다.",
        criteria: { A: [25, 35], E: [15, 25] }
    },
    {
        id: 19,
        icon: "🐺",
        name: "광기와 카리스마",
        subtitle: "조던 벨포트 (더 울프 오브 월스트리트)",
        description: "세상을 팔 수 있는 마성의 말쟁이. 카리스마와 야망으로 모든 것을 얻으려 하는 야심가입니다.",
        criteria: { I: [20, 30], E: [25, 35], S: [20, 30] }
    },
    {
        id: 20,
        icon: "🧑‍🍳",
        name: "무명에서 스타로",
        subtitle: "레미 (라따뚜이)",
        description: "출신을 넘은 손끝의 예술가. 꿈을 포기하지 않고 끝까지 도전하는 열정적인 창작자입니다.",
        criteria: { E: [20, 30], S: [15, 25], A: [15, 25] }
    },
    {
        id: 21,
        icon: "🧑‍🎓",
        name: "지적인 이상주의자",
        subtitle: "윌 (굿 윌 헌팅)",
        description: "상처 속에 숨겨진 따뜻한 천재. 뛰어난 지성과 깊은 감성을 동시에 가진 복합적 인물입니다.",
        criteria: { E: [25, 35], I: [20, 30], A: [15, 25] }
    },
    {
        id: 22,
        icon: "🎬",
        name: "시대를 거스른 영웅",
        subtitle: "오펜하이머",
        description: "역사를 설계한 자의 무거운 그림자. 인류의 미래를 위해 어려운 결정을 내리는 지식인입니다.",
        criteria: { S: [20, 30], A: [25, 35] }
    },
    {
        id: 23,
        icon: "🧛",
        name: "반항적인 소년 영웅",
        subtitle: "해리 포터",
        description: "모두가 지켜보는 주인공의 길. 운명에 맞서며 성장하는 용기 있는 젊은 영웅입니다.",
        criteria: { S: [25, 35], E: [20, 30] }
    },
    {
        id: 24,
        icon: "✨",
        name: "평범 속의 위대함",
        subtitle: "포레스트 검프",
        description: "그저 걸었을 뿐인데, 세상이 바뀌었다. 순수한 마음으로 기적을 만들어내는 특별한 평범함입니다.",
        criteria: { E: [20, 30], S: [20, 30] }
    }
];

// 게임 상태
let currentQuestionIndex = 0;
let scores = { A: 0, E: 0, I: 0, S: 0 };
let selectedAnswers = [];

// DOM 요소
const startScreen = document.getElementById('startScreen');
const questionScreen = document.getElementById('questionScreen');
const resultScreen = document.getElementById('resultScreen');
const loadingScreen = document.getElementById('loadingScreen');

const startBtn = document.getElementById('startBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionTitle = document.getElementById('questionTitle');
const optionsContainer = document.getElementById('optionsContainer');

const characterIcon = document.getElementById('characterIcon');
const characterName = document.getElementById('characterName');
const characterSubtitle = document.getElementById('characterSubtitle');
const characterDescription = document.getElementById('characterDescription');

const shareBtn = document.getElementById('shareBtn');
const retryBtn = document.getElementById('retryBtn');

// 화면 전환 함수
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// 테스트 시작
function startTest() {
    currentQuestionIndex = 0;
    scores = { A: 0, E: 0, I: 0, S: 0 };
    selectedAnswers = [];
    showScreen(questionScreen);
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // 진행률 업데이트
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    
    // 질문 제목 업데이트
    questionTitle.textContent = question.question;
    
    // 선택지 생성
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

// 선택지 선택
function selectOption(optionIndex) {
    const question = questions[currentQuestionIndex];
    const selectedOption = question.options[optionIndex];
    
    // 선택된 옵션 표시
    document.querySelectorAll('.option-button').forEach((btn, index) => {
        btn.classList.remove('selected');
        if (index === optionIndex) {
            btn.classList.add('selected');
        }
    });
    
    // 점수 추가
    Object.keys(selectedOption.scores).forEach(key => {
        scores[key] += selectedOption.scores[key];
    });
    
    // 답변 저장
    selectedAnswers.push({
        questionId: question.id,
        optionIndex: optionIndex,
        option: selectedOption
    });
    
    // 다음 질문으로 이동 (1초 후)
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showLoading();
        }
    }, 1000);
}

// 로딩 화면 표시
function showLoading() {
    showScreen(loadingScreen);
    
    // 3초 후 결과 표시
    setTimeout(() => {
        showResult();
    }, 3000);
}

// 결과 계산 및 표시
function showResult() {
    const result = calculateResult();
    
    // 결과 화면 업데이트
    characterIcon.textContent = result.icon;
    characterName.textContent = result.name;
    characterSubtitle.textContent = result.subtitle;
    characterDescription.textContent = result.description;
    
    showScreen(resultScreen);
}

// 결과 계산 함수
function calculateResult() {
    // 점수 정규화 (최대 45점 기준으로 정규화)
    const maxPossibleScore = 45; // 15문항 × 최대 3점
    const normalizedScores = {
        A: (scores.A / maxPossibleScore) * 40,
        E: (scores.E / maxPossibleScore) * 40,
        I: (scores.I / maxPossibleScore) * 40,
        S: (scores.S / maxPossibleScore) * 40
    };
    
    // 각 결과에 대해 매칭 점수 계산
    let bestMatch = null;
    let bestScore = -1;
    
    results.forEach(result => {
        let matchScore = 0;
        let criteriaCount = 0;
        
        Object.keys(result.criteria).forEach(trait => {
            const [min, max] = result.criteria[trait];
            const userScore = normalizedScores[trait];
            
            if (userScore >= min && userScore <= max) {
                matchScore += userScore;
                criteriaCount++;
            } else if (userScore < min) {
                matchScore += userScore * 0.5; // 부분 점수
            }
        });
        
        // 기준을 만족하는 특성이 많을수록 높은 점수
        const finalScore = matchScore * criteriaCount;
        
        if (finalScore > bestScore) {
            bestScore = finalScore;
            bestMatch = result;
        }
    });
    
    // 매칭되는 결과가 없으면 가장 높은 점수의 특성에 따라 결정
    if (!bestMatch) {
        const dominantTrait = Object.keys(normalizedScores).reduce((a, b) => 
            normalizedScores[a] > normalizedScores[b] ? a : b
        );
        
        // 주요 특성에 따른 기본 결과
        const defaultResults = {
            A: results[0], // 냉정한 전략가
            E: results[3], // 순애보 로맨티스트
            I: results[12], // 그림자 속 외톨이
            S: results[14] // 유쾌한 단짝 주인공
        };
        
        bestMatch = defaultResults[dominantTrait];
    }
    
    return bestMatch;
}

// 결과 공유
function shareResult() {
    const result = calculateResult();
    const shareText = `🎬 나의 영화 주인공 테스트 결과\n\n${result.icon} ${result.name}\n${result.subtitle}\n\n${result.description}\n\n당신도 테스트해보세요!`;
    
    if (navigator.share) {
        navigator.share({
            title: '나의 영화 주인공 테스트',
            text: shareText,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(shareText).then(() => {
            alert('결과가 클립보드에 복사되었습니다!');
        });
    }
}

// 이벤트 리스너
startBtn.addEventListener('click', startTest);
shareBtn.addEventListener('click', shareResult);
retryBtn.addEventListener('click', () => showScreen(startScreen));

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    showScreen(startScreen);
});

