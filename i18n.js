/* ═══════════════════════════════════════════════════════════
 * UK Study Guide — i18n (한국어 ko / English en)
 * ═══════════════════════════════════════════════════════════
 * 호주·캐나다 사이트와 같은 설계다.
 *  - 데이터(majorData·UG_UNIS·UNI_INFO·질문 배열)와 currentState는 한글 원문을 유지하고,
 *    화면에 그리는 순간에만 tr()로 번역한다. 결과 공유 링크(#p=)는 원문 값을 담으므로
 *    언어와 무관하게 복원된다.
 *  - 정적 HTML 문구는 data-i18n + I18N 사전(t)으로 처리한다.
 *
 * 영어 문구 톤: QS Top Universities 안내 페이지 기준. 2인칭, 담백한 사실 전달.
 * 선택 언어는 localStorage("sgh-lang")에 저장되며 허브·호주·캐나다와 공유된다.
 * ═══════════════════════════════════════════════════════════ */

const I18N = {
    ko: {
        docTitle: "영국 대학 진학 가이드 - 학부·석사 AI 진단 | UK Study Guide",
        docDesc: "QS 2027 데이터 기반 영국 대학 진학 AI 진단. 파운데이션·IYO 학부 경로부터 석사·프리마스터까지, 특정 유학원과 무관한 무료 정보 가이드.",

        navTagline: "영국 진학 AI",
        navUg: "학부 진단",
        navPg: "석사 진단",
        navHub: "국가 선택",
        themeDark: "다크", themeLight: "라이트",
        themeAria: "화면 모드 전환", themeTitle: "밝게 / 어둡게",
        langAria: "언어 선택",

        /* ---------- 히어로 · 홈 ---------- */
        heroTitle: "영국 대학 진학,<br>AI로 설계하다.",
        heroSub: '내 성적과 목표에 맞는 영국 대학 입학 루트를<br class="hidden sm:block"><strong class="text-white font-semibold">3분 만에</strong> 추천받으세요.',
        heroUgBtn: '학부 진학 진단 <span class="text-sm font-medium opacity-70">파운데이션 · IYO</span>',
        heroPgBtn: '석사 진학 진단 <span class="text-sm font-normal opacity-80">Direct · 프리마스터</span>',
        homeImgAlt1: "영국 대학 캠퍼스를 걷는 학생들",
        homeTitle: "누구에게나 열린,<br>중립적인 진학 가이드.",
        homeDesc: "이 페이지는 특정 유학원과 무관한 무료 정보 가이드입니다. QS 2027 데이터와 각 대학·기관 공시 정보를 기반으로, 내 상황에 맞는 영국 진학 경로를 스스로 확인할 수 있도록 만들었습니다.",
        homeLi1: "<strong>QS 2027 순위 · 26/27 학비 데이터</strong> 기반의 학교별 안내",
        homeLi2: "파운데이션 · IYO · 프리마스터 등 <strong>경로별 장단점 비교</strong>",
        homeLi3: "진단 결과를 <strong>링크 하나로 저장·공유</strong>, 대학 공식 페이지로 바로 연결",
        homeUgStart: "학부 진단 시작",
        homePgStart: "석사 진단 시작",
        srcTitle: "정보는 언제나,<br>공식 출처에서 확인하세요.",
        srcDesc: "이 가이드의 진단 결과는 방향을 잡기 위한 1차 자료입니다. 입학요건·학비·비자 규정은 수시로 바뀌므로, 최종 결정 전에는 반드시 아래 공식 채널에서 최신 정보를 확인하세요.",
        srcLink1: "<strong>Study UK</strong> — 영국문화원 공식 유학 안내",
        srcLink2: "<strong>UCAS</strong> — 영국 학부 지원 공식 시스템",
        srcLink3: "<strong>GOV.UK</strong> — 학생비자(Student visa) 공식 안내",
        homeImgAlt2: "영국 대학 건물",
        footerCopy: "ⓒ UK Study Guide. 정보 제공 목적으로 제작된 페이지입니다.",
        footerDisclaimer: "본 사이트는 특정 유학원·기관과 무관한 무료 정보 페이지입니다. 대학 순위는 QS World University Rankings 2027(2026년 6월 발표), 과정·요건 정보는 각 대학 및 운영 기관 공시 기준이며 학기마다 변동될 수 있습니다. 최종 지원 전 반드시 각 대학·기관 공식 페이지에서 최신 요강을 확인하세요.",

        /* ---------- 진단 대화 ---------- */
        introPg: '안녕하세요, UK Study Guide AI 진단입니다.<br>최신 2026-27 영국 대학 데이터를 바탕으로 <strong>석사 진학</strong> 맞춤 분석을 시작합니다.',
        introUg: '안녕하세요, UK Study Guide AI 진단입니다.<br>QS 2027 데이터 기반으로 <strong>영국 학부 진학(파운데이션 · IYO)</strong> 경로 분석을 시작합니다.',
        analyzing: '정보 입력이 완료되었습니다. 최신 26/27 영국 입시 데이터를 바탕으로 결과를 분석 중입니다...',
        backPrev: '<i class="fa-solid fa-arrow-left text-[11px]"></i> 이전 질문으로',
        otherTestPrompt: '보유하신 시험 종류를 선택해주세요. 입력하신 총점을 IELTS 밴드로 환산해 드립니다.',
        customPrompt: '희망하시는 전공명을 자세히 입력해주세요. 가장 가까운 계열로 매칭해 분석해 드립니다.<br><span class="block mt-2 text-[13px] text-gray-500">예) 스포츠 매니지먼트, 게임 디자인, 물리치료학, 항공운항학</span>',
        customPlaceholder: '전공명을 입력하세요 (예: 스포츠 매니지먼트)',
        customEmpty: '전공명을 입력해주세요',
        customAnalyze: '이 전공으로 분석하기',
        backShort: '← 뒤로',
        customMatched: (raw, label) => `'<strong>${raw}</strong>' 전공은 <strong>${label}</strong> 계열과 가장 가깝습니다. 이 계열 기준으로 분석을 진행하니, 실제 개설 대학과 세부 전공명은 각 대학 공식 페이지에서 확인하세요.`,
        catPicked: (cat) => `<strong>${cat}</strong>을 선택하셨네요. 이제 세부 전공을 선택해주세요.`,
        backToCats: '← 계열 다시 선택하기',
        backToScores: '← 성적 선택으로 돌아가기',
        scorePh: (type, min, max) => `${type} 총점을 입력하세요 (${min}~${max})`,
        convertBtn: 'IELTS로 환산하기',
        scoreInvalid: (min, max) => `유효한 점수를 입력하세요 (${min}~${max})`,
        scoreUser: (type, s) => `${type} ${s}점`,
        scoreConverted: (type, s, ielts, bandLabel) => `${type} ${s}점은 <strong>IELTS 약 ${ielts}</strong>에 해당합니다. "${bandLabel}" 구간으로 분석을 진행할게요.`,
        copied: '<i class="fa-solid fa-check"></i> 복사 완료!',

        /* ---------- 공유 · CTA ---------- */
        resultCta: '이 결과로 무료 상담 받기',
        resultCopy: '결과 링크 복사',
        resultRestart: '다시 진단하기',
        shareHint: '무료 상담 신청 시 이 진단 결과가 자동으로 첨부됩니다. 링크를 복사해 카카오톡 · 문자로 전달하면 같은 결과 페이지가 열립니다.',
        ctaTitle: '이 결과, 저장해 두세요.',
        ctaSubPg: '위 결과는 2026-27 데이터에 기반한 1차 진단입니다.<br class="hidden sm:block">링크 하나로 저장·공유할 수 있으니, 함께 고민하는 가족 · 친구에게도 전달해 보세요.',
        ctaSubUg: '위 결과는 QS 2027 데이터 기반의 1차 진단입니다.<br class="hidden sm:block">링크 하나로 저장·공유할 수 있으니, 함께 고민하는 가족 · 친구에게도 전달해 보세요.',
        ctaFoot: '최종 지원 전에는 <a href="https://study-uk.britishcouncil.org/" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-white">Study UK</a> · <a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-white">학생비자 공식 안내</a>와 각 대학 입학처에서 최신 요강을 확인하세요.',

        /* ---------- 공식 정보 보드 ---------- */
        boardTitle: '영국 유학 공식 정보',
        boardSubPg: '석사 진학 준비에 꼭 필요한 공식 채널만 모았습니다. 입학요건과 비자 규정은 항상 공식 출처 기준이 우선입니다.',
        boardSubUg: '학부 진학 준비에 꼭 필요한 공식 채널만 모았습니다. 입학요건과 비자 규정은 항상 공식 출처 기준이 우선입니다.',
        boardBtn: '영국 정부 공식 유학 안내 (Study UK)',

        /* ---------- 대학 상세 모달 ---------- */
        qsBadge: (qs) => `QS 2027 세계 ${qs}위`,
        modalSubName: (k) => k,
        statFounded: '설립', statCity: '위치', statStudents: '학생 수',
        topMajors: '우세 전공',
        ugRoutesLabel: '학부 진입 경로',
        visitOfficial: '대학 공식 홈페이지 보기',
        routeAlevel: 'A-level · IB 전형',
        routeIyo2: 'IYO · 2학년 편입',

        /* ---------- 석사 결과 ---------- */
        pgBadge: '석사 진단 결과',
        resultHeadPg: (title) => `당신을 위한 최적의 진학 경로는<br><span class="text-gold">"${title}"</span> 입니다.`,
        pmTitle: 'Pre-Master (석사 예비과정)',
        directTitle: 'Direct (석사 직행 과정)',
        pmSub: '성적 및 전공의 차이를 극복하고 명문대 진학을 보장받는 가장 확실한 루트입니다.',
        directSub: '우수한 성적과 전공 적합성을 바탕으로 1년 만에 석사 학위를 취득하는 효율적인 루트입니다.',
        diagReason: '진단 사유:',
        pmReason: (g, m) => (g ? '학점(GPA) 보완이 필요하며, ' : '') + (m ? '학부와 석사 전공이 상이하여 기초 선수과목 이수가 강력히 권장됩니다. (단, 비즈니스/마케팅, 심리학 Conversion 과정 등 일부 전공은 Direct 지원이 예외적으로 가능할 수 있습니다).' : ''),
        pmReasonExtra: '<br><br>프리마스터를 이수할 경우, 아카데믹 영어 실력 향상은 물론 논문 작성법(Research Skill)을 미리 익힐 수 있어 본 과정 진학 후 우수한 성적을 거두는 데 매우 유리합니다.',
        directReasonFull: '지원 전공에 대한 높은 적합성과 양호한 성적을 보유하고 있습니다. 학업계획서(SOP)와 이력서(CV)에 본인만의 스토리를 전략적으로 담아 명문대 Direct 입학을 정조준합니다.',
        recUnisTitle: (m) => `${m} 추천 대학`,
        recUnisDesc: (m, desc) => `선택하신 <strong class="text-ink2">${m}</strong> 전공은 ${desc}`,
        tuitionLine: (tu) => `26/27학비: ${tu}`,
        courseLink: '공식 전공 과정 페이지 보기',
        uniHome: '대학 공식 홈페이지',
        uniIntroBtn: '학교 소개 · 기본 정보 보기',
        prepTitle: '석사 예비과정, 프리마스터와 프리세셔널',
        prepSub: '성적·전공·영어 요건이 아직 부족해도, 아래 예비과정을 통해 명문대 석사로 진입할 수 있습니다.<br class="hidden sm:block">두 과정은 목적이 다르므로, 내 상황에 맞는 과정을 고르는 것이 핵심입니다.',
        diagChip: '진단 추천',
        pmCardSub: '전공 지식 + 아카데믹 영어를 함께 준비 · &ldquo;Graduate Diploma&rdquo;',
        pmCardDesc: '석사 시작 전 전공 관련 과목과 논문 작성법(Research Skill)을 미리 이수하는 과정입니다. 진학 보장형에 지원하면 <strong>프리마스터 오퍼와 석사 오퍼를 함께</strong> 받고, 과정 중 아카데믹 영어 성적으로 <strong>석사 진학용 IELTS를 대체</strong>할 수 있습니다.',
        whenRec: '이런 경우 권장됩니다',
        pmWhen1: '학부 전공과 석사 전공이 다를 때',
        pmWhen2: '학부 GPA가 석사 진학 요건보다 낮을 때',
        pmWhen3: '아카데믹 영어·전공지식을 미리 끌어올리고 싶을 때',
        pmMeta1: '<strong class="text-ink2">기간</strong> 전공·기관에 따라 3 Terms(9·1월 시작) 또는 2 Terms(1·3월 시작). 2 Terms는 IELTS 0.5점 이상 더 요구됩니다.',
        pmMeta2: '<strong class="text-ink2">유의</strong> IELTS for UKVI 성적이 필요하며, 모든 전공에 개설되지는 않습니다. 진학 보장형은 전공·대학 선택이 다소 제한적입니다.',
        psTitle: 'Pre-sessional (프리세셔널 영어)',
        psSub: '대학이 직접 운영하는 학업 영어 과정',
        psDesc: '조건부 입학허가(Conditional Offer)는 받았으나 <strong>IELTS가 입학 요건에 조금 못 미칠 때</strong> 대학 부설로 이수하는 과정입니다. 현재 IELTS로 프리세셔널을 수강하고 <strong>Final Test에 통과하면 석사 진학용 IELTS 점수 제출을 면제</strong>받을 수 있습니다.',
        psWhen1: '조건부 오퍼는 받았지만 IELTS가 부족할 때',
        psWhen2: '단기간에 IELTS 점수를 더 올리기 부담스러울 때',
        psWhen3: '실제 수업에 필요한 학업 영어·스터디 스킬을 키우고 싶을 때',
        psMeta1: '<strong class="text-ink2">기간</strong> 현재 IELTS와 요구 IELTS의 점수 차이에 따라 4~46주로 결정됩니다. 차이가 클수록 기간이 길어집니다.',
        psMeta2: '<strong class="text-ink2">유의</strong> 일반 IELTS가 아닌 IELTS for UKVI 성적이 필요하며, 과정 종료 후 비자 연장이 필요할 수 있습니다.',
        prepSummary: '정리하면 <strong class="text-ink2">전공·학점이 부족</strong>하면 프리마스터, <strong class="text-ink2">영어 점수만 조금 부족</strong>하면 프리세셔널이 유리합니다. 두 과정 모두 조건부 오퍼로 사전 등록이 가능하며, 개설 여부는 각 대학 공식 페이지에서 확인할 수 있습니다.',
        docsTitle: '지원 서류 & 타이밍 가이드',
        docsSub: '영국 석사는 <strong class="text-ink2">자격 · 서류 · 타이밍</strong> 세 가지가 합격을 좌우합니다.',
        commonDocsTitle: '공통 필수 서류',
        commonDocsSub: '모든 영국 석사 지원자가 기본으로 준비해야 하는 서류입니다.',
        cDoc1: '<strong>영문 성적증명서</strong> (Academic Transcript)',
        cDoc2: '<strong>영문 학위 · 졸업(예정)증명서</strong> (Degree Certificate)',
        cDoc3: '<strong>학업계획서 · 자기소개서</strong> (Personal Statement · SOP)',
        cDoc4: '<strong>추천서</strong> (Reference Letter) 1~2부',
        cDoc5: '<strong>영문 이력서</strong> (CV / Resume)',
        cDoc6: '<strong>여권 사본</strong> (Passport)',
        cDoc7: '<strong>공인 영어성적</strong> (IELTS 등). <span class="text-mute">미보유 시 조건부 입학 후 추후 제출 가능</span>',
        customDocsTitle: (major, path) => `${major} · ${path} 맞춤 추가 서류`,
        customDocsSub: '진단 결과와 선택하신 전공을 반영한, 학생분께 특히 중요한 서류입니다.',
        xSop: '<strong>전공 전환 사유를 담은 학업계획서(SOP)</strong>: 왜 이 분야로 바꾸는지 설득력 있는 스토리가 합격을 좌우합니다.',
        xCourses: '학부 수강과목 상세 내역 (지원 전공과의 연관 과목 증빙용)',
        xPreDocs: '<strong>프리마스터 · 프리세셔널 조건부 입학 서류</strong>: 영어 점수가 아직 부족해도 사전 등록(조건부 오퍼)이 가능합니다.',
        xEnrol: '졸업 전이라면 재학증명서 + 성적증명서 (졸업예정증명 포함)',
        xDirectSop: '<strong>차별화된 학업계획서(SOP) · 영문 이력서(CV)</strong>: Direct 합격의 핵심 평가 요소이므로 완성도가 중요합니다.',
        xPortfolio: '포트폴리오 또는 글쓰기 샘플 (미디어 · 저널리즘 계열 필수)',
        xCareer: 'MBA 등 일부 경영 과정 지원 시 경력증명서 (요구되는 경우)',
        xFallback: '전공별 세부 요구 서류는 학교 · 과정마다 다르므로, 각 대학 공식 코스 페이지에서 확인하세요.',
        timingTitle: '지원 타이밍, 빠를수록 유리합니다',
        timingDesc: '영국 대학은 <strong>롤링 어드미션(Rolling Admission)</strong> 방식으로, 정원이 차는 순서대로 마감됩니다. 통상 <strong>입학 1년 전(전년도 9~10월)</strong> 원서가 열리며, 인기 과정은 조기 마감되므로 <strong>가능한 한 빨리 지원할수록 합격과 장학금에 유리</strong>합니다. 서류 준비에는 최소 1~2개월이 걸리는 만큼, 지금부터 준비를 시작하는 것을 권장합니다.',

        /* ---------- 학부 결과 ---------- */
        ugBadge: '학부 진단 결과',
        resultHeadUg: (title) => `당신을 위한 학부 진학 경로는<br><span class="text-gold">"${title}"</span> 입니다.`,
        fndTitle: '파운데이션 (Foundation)',
        fndSub: '고2 수료 후 바로 지원할 수 있는 영국 학부 진학의 표준 루트입니다.',
        iyoTitle: 'IYO (International Year One)',
        iyoSub: '1년 과정 수료 후 학사 2학년으로 편입, 총 유학 기간을 1년 단축하는 루트입니다.',
        topTitle: '파운데이션 중심 + A-level · IB 병행',
        topSub: '최상위권(옥스브리지 · 임페리얼 · LSE)은 IYO가 없어, 자체 파운데이션과 A-level · IB 전형을 함께 설계합니다.',
        bothTitle: '파운데이션 · IYO 병행 전략',
        bothSub: '두 경로 모두 지원 자격이 되어, 대학별로 유리한 쪽을 골라 지원하는 전략이 가능합니다.',
        rHs2: '고2 수료 예정 단계에서는 파운데이션이 유일하면서도 가장 빠른 경로입니다. 또래가 고3을 보내는 1년 동안 영국에서 파운데이션을 이수하고, 남들보다 빨리 학사 1학년에 진입할 수 있습니다.',
        rEtc: '내신 산출이 어려운 경우에도 파운데이션은 자체 평가 기준(인터뷰 · 내부 시험 등)으로 입학이 가능해 실질적인 진입 문이 가장 넓습니다.',
        rFast: '고교 졸업(예정) 자격과 내신을 갖추고 계셔서 IYO 지원이 가능하며, 빠른 학위 취득을 원하시는 목표와 가장 잘 맞습니다.',
        rTop: '목표하시는 최상위권 대학은 파운데이션조차 자체 운영(UCL UPC, 워릭 IFP 등)이거나 A-level · IB 성적으로만 선발합니다. 상위권 자체 파운데이션을 축으로 하되, 성적에 따라 A-level 전형 병행 여부를 함께 검토해 보세요.',
        rBoth: '졸업(예정) 자격과 내신을 갖추고 계셔서 파운데이션(전공 폭 넓음)과 IYO(기간 단축)를 대학별로 조합할 수 있는 유리한 위치입니다.',
        fieldNoteWide: 'IYO 개설이 가장 활발한 계열(경영 · 공학 · 컴퓨팅)을 희망하고 계셔서 2학년 편입 선택지가 넓은 편입니다.',
        fieldNoteNarrow: '선택하신 계열은 IYO 개설 대학이 제한적이라, 전공 선택 폭이 넓은 파운데이션 경로가 유리할 수 있습니다.',
        engNoneAdd: '공인 영어 성적은 아직 없어도 조건부 오퍼가 가능하니, IELTS(UKVI) 목표 점수와 준비 일정을 먼저 세워 보세요.',
        chipInput: '입력 전공',
        chipField: '선택 계열',
        fmTitleCustom: (cm, label) => `'${cm}', 가장 가까운 계열은 ${label}`,
        fmTitleField: (label) => `${label} 추천 전공`,
        fmDescCustom: (cm, label) => `입력하신 '<strong class="text-ink2">${cm}</strong>' 전공은 <strong class="text-ink2">${label}</strong> 계열 기준으로 분석했습니다. 아래는 이 계열의 대표 전공이며, '${cm}' 개설 대학과 정확한 코스명은 각 대학 공식 페이지에서 확인하세요.`,
        fmDescField: '선택하신 계열에서 영국 학부로 많이 진학하는 대표 전공입니다. 세부 전공과 개설 대학은 아래 <strong class="text-ink2">대학별 공식 페이지 링크</strong>에서 정확히 확인하실 수 있습니다.',
        routes3Title: '영국 학부, 3가지 진입 경로',
        routes3Sub: '한국 고교 과정은 영국 13년제(A-level)와 달라, 대부분 아래 준비 과정을 거쳐 학사에 진입합니다.',
        recChip: '추천 경로',
        infoChip: '경로 안내',
        fndCardTitle: '파운데이션',
        fndCardSub: '1년 수료 → 학사 1학년 입학',
        fndLi1: '고2 수료 후 지원 가능, 가장 빠른 시작',
        fndLi2: '통상 내신 + IELTS(UKVI) 4.5 ~ 5.5 수준',
        fndLi3: '전공 선택 폭이 가장 넓음 (인문 ~ 이공 전반)',
        fndLi4: '수료 성적 충족 시 연계 대학 진학 보장형 다수',
        iyoCardTitle: 'IYO',
        iyoCardSub: '1년 수료 → 학사 2학년 편입',
        iyoLi1: '<strong>고교 졸업 후 대학을 1년 정도 이수한 학생에게 특히 추천</strong> (2학년 편입 구조)',
        iyoLi2: '고교 졸업(예정) + 내신 요건 필요',
        iyoLi3: '통상 IELTS(UKVI) 5.5 ~ 6.0 수준',
        iyoLi4: '기간이 짧은 편입 과정이라 <strong>개설 전공이 제한적</strong> (경영 · 공학 · 컴퓨팅 중심)',
        iyoLi5: '총 유학 기간 1년 단축 = 학비 · 생활비 절감',
        dirCardTitle: 'A-level · IB 전형',
        dirCardSub: '정규 고교과정 성적 → 학사 1학년',
        dirLi1: '해외고 · 국제학교 출신에게 열린 경로',
        dirLi2: '옥스브리지 · 임페리얼 · LSE는 이 경로만 운영',
        dirLi3: 'UCAS를 통한 지원 · 최대 5개교',
        dirLi4: 'IELTS 6.5 ~ 7.0+ 등 높은 요건',
        dirNote: '<i class="fa-solid fa-circle-info text-royal mr-1.5"></i><strong>A-level · IB 전형 입학</strong>은 파운데이션 · IYO와 진행 방식이 다릅니다. 해당 경로는 <a href="https://www.ucas.com/" target="_blank" rel="noopener" class="underline font-semibold">UCAS 공식 안내</a>를 참고하세요.',
        ugTuitionNote: '파운데이션 · IYO 학비는 기관과 전공에 따라 대략 <strong class="text-ink2">연 £20,000 ~ £30,000</strong> 수준이며 매년 변동됩니다. 정확한 금액은 각 기관 공식 페이지의 최신 요강에서 확인하세요.',
        ugPrepTitle: '학부 지원 준비 가이드',
        ugDocsTitle: '기본 준비 서류',
        ugDocsSub: '파운데이션 · IYO 지원의 공통 기본 서류입니다.',
        ugDoc1: '<strong>영문 고교 성적증명서</strong> (검정고시는 성적증명으로 대체)',
        ugDoc2: '<strong>영문 재학 · 졸업(예정)증명서</strong>',
        ugDoc3: '<strong>여권 사본</strong>',
        ugDoc4: '<strong>IELTS for UKVI</strong>: <span class="text-mute">미보유 시 조건부 오퍼 후 제출 가능</span>',
        ugDoc5: '<strong>간단한 자기소개 · 학업 계획</strong> (기관별 요구 시)',
        ugTimingTitle: '지원 타이밍',
        ugTimingSub: '파운데이션 · IYO는 대학 본과와 입학 시점 구조가 다릅니다.',
        ugTime1: '주요 기관은 <strong>9월 외에 1월 · 4월 등 복수 입학 시점</strong>을 운영해 학기 중 합류도 가능합니다.',
        ugTime2: '인기 대학 연계 과정은 <strong>정원 마감이 빠르므로 6개월 ~ 1년 전 지원</strong>을 권장합니다.',
        ugTime3: '비자(학생비자) 수속에 통상 <strong>1 ~ 2개월</strong>이 소요되므로 역산해 준비합니다.',
        ugTime4: '고2 재학생은 <strong>수료 직후 9월 입학</strong>을 목표로 지금부터 설계하는 것이 이상적입니다.',
        ftTitle: '파운데이션, 어떤 종류를 고를까?',
        ftSub: '같은 &ldquo;파운데이션&rdquo;이라도 <strong class="text-ink2">사설</strong> · <strong class="text-ink2">자체 대학부설</strong> · <strong class="text-ink2">입학보장형 대학부설</strong>로 나뉘며,<br class="hidden sm:block">내신 성적대와 목표에 따라 유리한 유형이 달라집니다.',
        ftStep1: '파운데이션 적합 진단',
        ftStep2: '내 성적에 맞는 기관 유형',
        ftStep3: '전공별 추천 학교 확인',
        ftRecLabel: '진단 결과 추천:',
        ftReasonTop: '내신 상위권(1~3등급대)이라 UCL · KCL · Warwick 등 자체 대학부설 파운데이션에 도전할 수 있는 성적대입니다. 여기에 성적에 맞춰 대부분의 대학에 오픈 초이스로 지원할 수 있는 사설 파운데이션을 병행하면, 상향 도전과 안전 지원을 동시에 가져갈 수 있습니다.',
        ftReasonMidTop: '내신은 중위권이지만 상위권 대학을 목표하고 계시죠. 이 경우 파운데이션 수료 성적으로 대부분의 대학에 오픈 초이스 지원이 가능한 사설 파운데이션이 역전 폭이 가장 넓습니다.',
        ftReasonMid: '내신 중위권(4~6등급대)이라면 수료 성적 충족 시 학부 진학이 보장되는 입학보장형 대학부설이 가장 안전한 선택입니다. 선택 폭이 넓은 사설 파운데이션을 함께 두면, 파운데이션 성적이 잘 나올 경우 더 높은 대학까지 노릴 수 있습니다.',
        ftReasonEtc: '내신 산출이 어렵거나 검정고시 출신이라면, 자체 평가(인터뷰 · 내부시험)로 입학 문이 넓고 소수정예 담임제로 관리해 주는 사설 파운데이션이 가장 현실적인 출발점입니다.',
        chipBoth: '병행 추천 · 폭넓은 지원',
        chipMine: '내 성적 추천',
        chipOpen: '오픈 초이스형',
        chipOwn: '대학부설 · 자체형',
        chipGuar: '대학부설 · 입학보장형',
        pvTitle: '사설 파운데이션',
        pvSub: '오픈 초이스 · 소수정예 관리형',
        pvLi1: '연 2회 입학 (9월 / 1월)',
        pvLi2: '입학 조건 까다롭지 않음 · IELTS 4.5 ~ 5.5',
        pvLi3: '성적에 맞춰 대부분의 대학에 <strong>오픈 초이스로 지원</strong> (진학률 최대)',
        pvLi4: '한 반 최대 10명 소수정예 · 담임제 성적/생활/진학 관리',
        pvLi5: '선호 학교 · 전공 · 지역을 폭넓게 선택 가능',
        pvRec: '<strong class="text-ink2">추천</strong> 내신은 낮지만 상위권을 목표하거나, 목표 학교 · 전공이 아직 정해지지 않았거나, 학습 · 생활 관리에 도움이 필요한 학생',
        ownTitle: '자체 대학부설',
        ownSub: '상위권 대학 캠퍼스에서 수학',
        ownLi1: '연 1회 입학 (9월)',
        ownLi2: '입학 조건 내신 3~4등급 이상(학교별 상이) · IELTS 5.5 이상',
        ownLi3: '목표 대학 캠퍼스 생활을 미리 경험(기숙사 · 도서관 등) · 높은 수업 수준',
        ownLi4: '해당 학교 진학 보장은 없음. 성적 우수 시 진학률 상승(평균 50%)',
        ownRec: '<strong class="text-ink2">추천</strong> 자기주도 학습 능력이 뛰어나고 스스로 생활 · 성적 관리를 잘하는 내신 상위권 학생',
        guTitle: '입학보장형 대학부설',
        guSub: '진학 보장으로 안전하게',
        guLi1: '연 2회 입학 (9월 / 1월)',
        guLi2: '입학 조건 내신 5~6등급 이상(학교별 상이) · IELTS 5.0 ~ 5.5',
        guLi3: '<strong>성적 충족 시 학부 진학 보장</strong>(진학률 85~95%)',
        guLi4: '처음 정한 대학 · 일부 파트너 대학 외로는 진학이 어려움',
        guRec: '<strong class="text-ink2">추천</strong> 중상위권 학교로 안전하게 입학하기를 희망하는 학생',
        nextStepLine: (label) => `<span class="inline-flex items-center gap-2 font-semibold text-ink2"><span class="w-5 h-5 rounded-full bg-ink2 text-white text-[11px] inline-flex items-center justify-center">3</span> 다음 단계</span>: 아래에서 ${label ? '<strong class="text-ink2">' + label + '</strong> 전공으로' : '희망 전공으로'} 진학 가능한 추천 학교를 확인하고, 내신 · 목표에 맞춰 각 기관 공식 페이지의 최신 요강과 비교해 보세요.`,
        listTitle: (label) => `${label ? label + ' 계열 ' : ''}추천 영국 대학`,
        listSub: (label) => `각 대학 아래에 ${label ? '<strong class="text-ink2">' + label + ' 계열에서 진학 가능한 전공명</strong>' : '진학 가능한 전공명'}을 함께 표시했습니다.<br class="hidden sm:block">대학 이름이나 '학교 안내'를 누르면 학교 소개 · 우세 전공 · 진입 경로를 확인할 수 있습니다.`,
        filterAll: '전체',
        filterIyo: 'IYO 운영',
        filterFnd: '파운데이션 운영',
        filterDirect: 'A-level · IB 전형',
        sortLabel: '정렬',
        sortQs: 'QS 랭킹순',
        sortAz: '이름순 A-Z',
        sortKo: '가나다순',
        countLine: (n, p, pages) => `총 ${n}개교 · ${p} / ${pages} 페이지`,
        countNote: '과정 개설 전공과 요건은 학기마다 변동될 수 있습니다',
        prevPage: '이전 페이지',
        nextPage: '다음 페이지',
        uniSub: (k, qs) => `${k} · QS ${qs}위`,
        schoolInfo: '학교 안내',
        officialView: '공식 홈페이지 보기'
    },

    en: {
        docTitle: "Study at a UK university — undergraduate and master's pathways | UK Study Guide",
        docDesc: "A free pathway check for UK universities based on QS 2027 data — foundation and International Year One routes for undergraduates, direct entry and pre-master's for postgraduates. Independent of any agency.",

        navTagline: "UK pathway guide",
        navUg: "Undergraduate",
        navPg: "Master's",
        navHub: "Change country",
        themeDark: "Dark", themeLight: "Light",
        themeAria: "Switch colour mode", themeTitle: "Light / dark",
        langAria: "Select language",

        /* ---------- 히어로 · 홈 ---------- */
        heroTitle: "Your route to<br>a UK university.",
        heroSub: 'Find the UK entry route that fits your grades and goals —<br class="hidden sm:block">in about <strong class="text-white font-semibold">three minutes</strong>.',
        heroUgBtn: 'Undergraduate check <span class="text-sm font-medium opacity-70">Foundation · IYO</span>',
        heroPgBtn: "Master's check <span class=\"text-sm font-normal opacity-80\">Direct · Pre-master's</span>",
        homeImgAlt1: "Students walking across a UK university campus",
        homeTitle: "A neutral guide,<br>open to everyone.",
        homeDesc: "This page is a free information guide, independent of any agency. It draws on QS 2027 data and each university's published information, so you can check your own route into a UK university.",
        homeLi1: "School-by-school guidance built on <strong>QS 2027 rankings and 26/27 tuition data</strong>",
        homeLi2: "A clear comparison of <strong>foundation, IYO and pre-master's routes</strong>",
        homeLi3: "Save and share your result <strong>as a single link</strong>, with direct links to official university pages",
        homeUgStart: "Start the undergraduate check",
        homePgStart: "Start the master's check",
        srcTitle: "Always confirm the details<br>at the official source.",
        srcDesc: "The result here is a first step for setting your direction. Entry requirements, tuition and visa rules change often, so confirm the latest information through the official channels below before you decide.",
        srcLink1: "<strong>Study UK</strong> — the British Council's official study guide",
        srcLink2: "<strong>UCAS</strong> — the official undergraduate application system",
        srcLink3: "<strong>GOV.UK</strong> — official Student visa guidance",
        homeImgAlt2: "A UK university building",
        footerCopy: "© UK Study Guide. Published for information purposes.",
        footerDisclaimer: "This site is a free information resource and is not affiliated with any agency or institution. Rankings are from the QS World University Rankings 2027 (published June 2026); course and entry information follows what each university and provider has published and can change each term. Always check the latest requirements on the official pages before you apply.",

        /* ---------- 진단 대화 ---------- */
        introPg: "Welcome — this is the UK Study Guide check.<br>Using the latest 2026–27 UK university data, we will look at your route to a <strong>master's degree</strong>.",
        introUg: "Welcome — this is the UK Study Guide check.<br>Using QS 2027 data, we will look at your <strong>undergraduate route (foundation · IYO)</strong> into a UK university.",
        analyzing: "That's everything we need. Analysing your result against the latest 26/27 UK admissions data...",
        backPrev: '<i class="fa-solid fa-arrow-left text-[11px]"></i> Previous question',
        otherTestPrompt: "Which test have you taken? Enter your overall score and we will convert it to an IELTS band.",
        customPrompt: 'Type the course you have in mind and we will match it to the closest subject area.<br><span class="block mt-2 text-[13px] text-gray-500">e.g. sport management, game design, physiotherapy, aviation</span>',
        customPlaceholder: "Enter a course name (e.g. sport management)",
        customEmpty: "Please enter a course name",
        customAnalyze: "Analyse with this course",
        backShort: "← Back",
        customMatched: (raw, label) => `'<strong>${raw}</strong>' sits closest to <strong>${label}</strong>, so we will run the analysis on that basis. Check each university's own pages for where the course is offered and its exact title.`,
        catPicked: (cat) => `You chose <strong>${cat}</strong>. Now pick a specific course.`,
        backToCats: "← Choose a different area",
        backToScores: "← Back to score options",
        scorePh: (type, min, max) => `Enter your overall ${type} score (${min}–${max})`,
        convertBtn: "Convert to IELTS",
        scoreInvalid: (min, max) => `Enter a valid score (${min}–${max})`,
        scoreUser: (type, s) => `${type} ${s}`,
        scoreConverted: (type, s, ielts, bandLabel) => `A ${type} score of ${s} is roughly <strong>IELTS ${ielts}</strong>. We will continue with the "${bandLabel}" band.`,
        copied: '<i class="fa-solid fa-check"></i> Copied!',

        /* ---------- 공유 · CTA ---------- */
        resultCta: "Get free advice on this result",
        resultCopy: "Copy result link",
        resultRestart: "Start again",
        shareHint: "Your result is attached automatically when you request advice. Copy the link to share it — anyone who opens it sees the same result page.",
        ctaTitle: "Keep this result",
        ctaSubPg: 'This is a first assessment based on 2026–27 data.<br class="hidden sm:block">It lives in a single link — save it, or share it with the family and friends helping you decide.',
        ctaSubUg: 'This is a first assessment based on QS 2027 data.<br class="hidden sm:block">It lives in a single link — save it, or share it with the family and friends helping you decide.',
        ctaFoot: 'Before you apply, confirm the latest requirements on <a href="https://study-uk.britishcouncil.org/" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-white">Study UK</a>, the <a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-white">official Student visa guidance</a> and each university\'s admissions pages.',

        /* ---------- 공식 정보 보드 ---------- */
        boardTitle: "Official information",
        boardSubPg: "The official channels you will need for a master's application. Entry requirements and visa rules always follow the official source.",
        boardSubUg: "The official channels you will need for an undergraduate application. Entry requirements and visa rules always follow the official source.",
        boardBtn: "Study UK — the official guide to studying in the UK",

        /* ---------- 대학 상세 모달 ---------- */
        qsBadge: (qs) => `QS 2027 world #${qs}`,
        modalSubName: () => "",
        statFounded: "Founded", statCity: "Location", statStudents: "Students",
        topMajors: "Strongest subjects",
        ugRoutesLabel: "Undergraduate entry routes",
        visitOfficial: "Visit the university's official site",
        routeAlevel: "A-level / IB entry",
        routeIyo2: "IYO — into year 2",

        /* ---------- 석사 결과 ---------- */
        pgBadge: "Master's result",
        resultHeadPg: (title) => `The route that fits you best is<br><span class="text-gold">"${title}"</span>.`,
        pmTitle: "Pre-Master's (preparatory route)",
        directTitle: "Direct entry",
        pmSub: "The surest way to bridge a gap in grades or subject background and secure a place at a leading university.",
        directSub: "With strong grades and a matching background, you can complete a UK master's degree in a single year.",
        diagReason: "Why this route:",
        pmReason: (g, m) => {
            if (g && m) return "Your GPA sits below the usual direct-entry range, and you are changing fields, so covering the foundational modules first is strongly recommended. (Some courses — business, marketing and psychology conversion programmes among them — do accept direct applications from other backgrounds.)";
            if (g) return "Your GPA sits below the usual direct-entry range, so strengthening it through a preparatory route is the safer path.";
            return "You are changing fields, so covering the foundational modules first is strongly recommended. (Some courses — business, marketing and psychology conversion programmes among them — do accept direct applications from other backgrounds.)";
        },
        pmReasonExtra: "<br><br>A pre-master's also builds your academic English and research skills before the degree starts, which makes strong results in the master's itself much more likely.",
        directReasonFull: "Your background fits the course well and your grades are sound. Focus on a personal statement and CV that tell your own story convincingly, and aim directly at a leading university.",
        recUnisTitle: (m) => `Recommended universities for ${m}`,
        recUnisDesc: (m, desc) => `You chose <strong class="text-ink2">${m}</strong>. ${desc}`,
        tuitionLine: (tu) => `26/27 tuition: ${tu}`,
        courseLink: "See the official course page",
        uniHome: "University official site",
        uniIntroBtn: "About this university",
        prepTitle: "The preparatory routes: pre-master's and pre-sessional",
        prepSub: 'Even if your grades, background or English are not there yet, these routes can still take you into a leading master\'s programme.<br class="hidden sm:block">They serve different purposes, so the key is choosing the one that matches your situation.',
        diagChip: "Suggested for you",
        pmCardSub: "Subject knowledge plus academic English · “Graduate Diploma”",
        pmCardDesc: "A course taken before the master's that covers subject modules and research skills. Apply through a progression-guaranteed route and you receive <strong>the pre-master's offer and the master's offer together</strong>, and your academic English result during the course can <strong>replace IELTS for entry to the degree</strong>.",
        whenRec: "Recommended when",
        pmWhen1: "Your undergraduate subject differs from the master's you want",
        pmWhen2: "Your GPA is below the course entry requirement",
        pmWhen3: "You want to build academic English and subject knowledge in advance",
        pmMeta1: '<strong class="text-ink2">Length</strong> Three terms (September or January start) or two terms (January or March start), depending on subject and provider. The two-term version asks for IELTS at least 0.5 higher.',
        pmMeta2: '<strong class="text-ink2">Note</strong> IELTS for UKVI is required, and not every subject is offered. Progression-guaranteed routes limit your choice of subject and university somewhat.',
        psTitle: "Pre-sessional English",
        psSub: "Academic English run by the university itself",
        psDesc: "A course you take at the university when you hold a conditional offer but <strong>your IELTS falls just short of the entry requirement</strong>. Enrol with your current IELTS, and <strong>passing the final test replaces the IELTS requirement</strong> for the degree.",
        psWhen1: "You hold a conditional offer but your IELTS is short",
        psWhen2: "Raising your IELTS quickly would be a strain",
        psWhen3: "You want the academic English and study skills the course itself demands",
        psMeta1: '<strong class="text-ink2">Length</strong> Between 4 and 46 weeks, set by the gap between your current IELTS and the required score. The bigger the gap, the longer the course.',
        psMeta2: '<strong class="text-ink2">Note</strong> IELTS for UKVI is required rather than the standard test, and you may need to extend your visa when the course ends.',
        prepSummary: 'In short: if <strong class="text-ink2">your subject or grades</strong> are the gap, take a pre-master\'s; if <strong class="text-ink2">only your English score</strong> is short, pre-sessional is the better fit. Both accept early enrolment on a conditional offer — check each university\'s pages for availability.',
        docsTitle: "Documents and timing",
        docsSub: 'Three things decide a UK master\'s application: <strong class="text-ink2">eligibility, documents and timing</strong>.',
        commonDocsTitle: "Core documents",
        commonDocsSub: "What every applicant to a UK master's prepares as standard.",
        cDoc1: "<strong>Academic transcript</strong> in English",
        cDoc2: "<strong>Degree or graduation certificate</strong> in English (or expected-graduation letter)",
        cDoc3: "<strong>Personal statement</strong> (SOP)",
        cDoc4: "<strong>Reference letters</strong> — one or two",
        cDoc5: "<strong>CV / resume</strong> in English",
        cDoc6: "<strong>Passport copy</strong>",
        cDoc7: '<strong>English test result</strong> (IELTS or equivalent). <span class="text-mute">Without one, you can apply for a conditional offer and submit it later</span>',
        customDocsTitle: (major, path) => `Extra documents for ${major} · ${path}`,
        customDocsSub: "Based on your result and chosen subject, these matter most in your case.",
        xSop: "<strong>A personal statement that explains the change of field</strong>: a convincing account of why you are moving into this subject carries real weight.",
        xCourses: "A detailed module list from your degree (as evidence of related coursework)",
        xPreDocs: "<strong>Conditional-offer documents for the pre-master's or pre-sessional</strong>: you can register early even before your English score is ready.",
        xEnrol: "If you have not yet graduated: enrolment certificate plus transcript (including expected graduation)",
        xDirectSop: "<strong>A distinctive personal statement and CV</strong>: these are the core of a direct-entry assessment, so polish matters.",
        xPortfolio: "Portfolio or writing samples (required for media and journalism courses)",
        xCareer: "Proof of employment, where required (MBA and some management courses)",
        xFallback: "Detailed requirements differ by university and course — check each official course page.",
        timingTitle: "Timing: earlier is better",
        timingDesc: "UK universities admit on a <strong>rolling basis</strong> — places close as they fill. Applications usually open <strong>a year before entry (September–October of the previous year)</strong>, and popular courses close early, so <strong>applying as early as you can helps with both offers and scholarships</strong>. Preparing the documents takes at least one to two months, so it pays to start now.",

        /* ---------- 학부 결과 ---------- */
        ugBadge: "Undergraduate result",
        resultHeadUg: (title) => `Your undergraduate route is<br><span class="text-gold">"${title}"</span>.`,
        fndTitle: "Foundation",
        fndSub: "The standard route into a UK degree, open from the end of the second-to-last school year.",
        iyoTitle: "IYO (International Year One)",
        iyoSub: "A one-year course leading into year 2 of the degree — cutting a full year off your time in the UK.",
        topTitle: "Foundation-led, with A-level / IB alongside",
        topSub: "The very top universities — Oxbridge, Imperial, LSE — run no IYO, so the plan combines university-run foundations with A-level / IB entry.",
        bothTitle: "Foundation and IYO combined",
        bothSub: "You qualify for both routes, so you can pick whichever suits each university best.",
        rHs2: "At the end of the second-to-last school year, the foundation is both the only route and the fastest one. While your classmates spend a year finishing school, you complete the foundation in the UK and reach year 1 of a degree ahead of them.",
        rEtc: "Even when school grades are hard to certify, foundations admit on their own assessments — interviews and internal tests — which makes them the widest realistic way in.",
        rFast: "With secondary school (or expected) graduation and the grades to match, you qualify for IYO — which fits your goal of finishing the degree quickly.",
        rTop: "The universities you are aiming for either run their own foundations (UCL UPC, Warwick IFP and others) or admit only on A-level / IB results. Build the plan around a top university-run foundation, and weigh adding the A-level route depending on your grades.",
        rBoth: "With graduation (or expected) and solid grades, you are well placed to combine the foundation (widest subject choice) and IYO (a year shorter), university by university.",
        fieldNoteWide: "You are aiming at the areas where IYO is most widely offered — business, engineering and computing — so the year-2 entry options are broad.",
        fieldNoteNarrow: "Few universities run an IYO in your chosen area, so the foundation route, with its wider subject choice, may serve you better.",
        engNoneAdd: "No English test yet is fine — conditional offers are available. Set your IELTS (UKVI) target and study schedule first.",
        chipInput: "Your course",
        chipField: "Chosen area",
        fmTitleCustom: (cm, label) => `'${cm}' — closest area: ${label}`,
        fmTitleField: (label) => `Popular courses in ${label}`,
        fmDescCustom: (cm, label) => `We analysed '<strong class="text-ink2">${cm}</strong>' under the <strong class="text-ink2">${label}</strong> area. Below are the representative courses in this area — check each university's own pages for where '${cm}' is offered and its exact title.`,
        fmDescField: 'The courses in your chosen area that international students most often take at UK universities. Confirm exact courses and availability through the <strong class="text-ink2">official university links</strong> below.',
        routes3Title: "Three ways into a UK degree",
        routes3Sub: "Korean secondary schooling differs from the UK's 13-year (A-level) system, so most students enter a degree through one of these routes.",
        recChip: "Your route",
        infoChip: "For reference",
        fndCardTitle: "Foundation",
        fndCardSub: "1 year → year 1 of the degree",
        fndLi1: "Open from the end of year 11 — the earliest start",
        fndLi2: "Typically school grades plus IELTS (UKVI) 4.5–5.5",
        fndLi3: "The widest subject choice, from humanities to science and engineering",
        fndLi4: "Many guarantee progression to the partner university if you meet the completion grades",
        iyoCardTitle: "IYO",
        iyoCardSub: "1 year → year 2 of the degree",
        iyoLi1: "<strong>Especially suited to students who finished school and completed about a year of university</strong> (it leads into year 2)",
        iyoLi2: "Requires (expected) secondary graduation and school grades",
        iyoLi3: "Typically IELTS (UKVI) 5.5–6.0",
        iyoLi4: "A short transfer-style course, so <strong>subjects are limited</strong> — mostly business, engineering and computing",
        iyoLi5: "A year less in the UK — saving both tuition and living costs",
        dirCardTitle: "A-level / IB entry",
        dirCardSub: "School-leaving results → year 1 of the degree",
        dirLi1: "The route for students from international schools and schools abroad",
        dirLi2: "Oxbridge, Imperial and LSE admit through this route only",
        dirLi3: "Apply through UCAS — up to five universities",
        dirLi4: "High requirements, typically IELTS 6.5–7.0+",
        dirNote: '<i class="fa-solid fa-circle-info text-royal mr-1.5"></i><strong>A-level / IB entry</strong> works differently from the foundation and IYO routes. See the <a href="https://www.ucas.com/" target="_blank" rel="noopener" class="underline font-semibold">official UCAS guidance</a>.',
        ugTuitionNote: 'Foundation and IYO tuition runs at roughly <strong class="text-ink2">£20,000–£30,000 a year</strong> depending on provider and subject, and changes annually. Check each provider\'s official pages for exact figures.',
        ugPrepTitle: "Preparing your application",
        ugDocsTitle: "Core documents",
        ugDocsSub: "The standard documents for foundation and IYO applications.",
        ugDoc1: "<strong>School transcript in English</strong> (or the equivalency-exam certificate)",
        ugDoc2: "<strong>Enrolment or (expected) graduation certificate in English</strong>",
        ugDoc3: "<strong>Passport copy</strong>",
        ugDoc4: '<strong>IELTS for UKVI</strong>: <span class="text-mute">without it, you can receive a conditional offer and submit later</span>',
        ugDoc5: "<strong>A short personal statement and study plan</strong> (where the provider asks for one)",
        ugTimingTitle: "Timing",
        ugTimingSub: "Foundation and IYO intakes run on a different calendar from the degree itself.",
        ugTime1: "Major providers run <strong>several intakes — January and April as well as September</strong> — so you can join mid-year.",
        ugTime2: "Courses linked to popular universities <strong>fill early, so apply six months to a year ahead</strong>.",
        ugTime3: "The Student visa usually takes <strong>one to two months</strong>, so work backwards from your start date.",
        ugTime4: "If you are in the second-to-last school year, the ideal plan targets <strong>the September right after you finish</strong> — and starts now.",
        ftTitle: "Which kind of foundation?",
        ftSub: 'The same word covers three different things — <strong class="text-ink2">independent</strong>, <strong class="text-ink2">university-run</strong> and <strong class="text-ink2">progression-guaranteed university</strong> foundations —<br class="hidden sm:block">and which suits you depends on your grades and your goal.',
        ftStep1: "Foundation fit check",
        ftStep2: "The right provider type for your grades",
        ftStep3: "Recommended universities by subject",
        ftRecLabel: "Based on your result:",
        ftReasonTop: "With top-band school grades (bands 1–3) you can aim for the university-run foundations at UCL, KCL, Warwick and similar. Pair that with an independent foundation — which lets you apply open-choice to most universities on your results — and you cover both the ambitious and the safe application at once.",
        ftReasonMidTop: "Your school grades are mid-band, but you are aiming high. In that case an independent foundation gives you the most room to climb: its completion grades let you apply open-choice to most universities.",
        ftReasonMid: "With mid-band grades (bands 4–6), the safest choice is a progression-guaranteed university foundation, which secures your degree place once you meet the completion grades. Keep an independent foundation alongside, and a strong foundation result can still take you higher.",
        ftReasonEtc: "If your grades are hard to certify, or you took the equivalency exam, the most realistic start is an independent foundation — admission rests on its own assessment (interview and internal test), and small classes with a form-tutor system keep study and daily life on track.",
        chipBoth: "Also suggested · widest reach",
        chipMine: "Suggested for your grades",
        chipOpen: "Open choice",
        chipOwn: "University-run",
        chipGuar: "Progression-guaranteed",
        pvTitle: "Independent foundation",
        pvSub: "Open choice · small supervised classes",
        pvLi1: "Two intakes a year (September / January)",
        pvLi2: "Accessible entry requirements · IELTS 4.5–5.5",
        pvLi3: "Apply <strong>open-choice to most universities</strong> on your results (highest progression reach)",
        pvLi4: "Classes of ten at most, with a form tutor overseeing grades, welfare and applications",
        pvLi5: "Wide choice of university, subject and region",
        pvRec: '<strong class="text-ink2">Best for</strong> students whose grades are modest but whose aim is high, who have not settled on a university or subject, or who benefit from close study support',
        ownTitle: "University-run foundation",
        ownSub: "Study on the campus of a leading university",
        ownLi1: "One intake a year (September)",
        ownLi2: "Entry around grade band 3–4 or above (varies by university) · IELTS 5.5+",
        ownLi3: "Live the campus life of your target university early — halls, libraries — with teaching to match",
        ownLi4: "No guaranteed place at that university; strong results lift progression (about 50% on average)",
        ownRec: '<strong class="text-ink2">Best for</strong> self-directed students in the top grade band who manage their own study and daily life well',
        guTitle: "Progression-guaranteed foundation",
        guSub: "The safe route, with a secured place",
        guLi1: "Two intakes a year (September / January)",
        guLi2: "Entry around grade band 5–6 or above (varies by university) · IELTS 5.0–5.5",
        guLi3: "<strong>A guaranteed degree place once you meet the completion grades</strong> (85–95% progress)",
        guLi4: "Moving beyond the chosen university and its partners is difficult",
        guRec: '<strong class="text-ink2">Best for</strong> students who want a safe, secured route into a solid university',
        nextStepLine: (label) => `<span class="inline-flex items-center gap-2 font-semibold text-ink2"><span class="w-5 h-5 rounded-full bg-ink2 text-white text-[11px] inline-flex items-center justify-center">3</span> Next step</span>: check the recommended universities ${label ? 'for <strong class="text-ink2">' + label + '</strong>' : 'for your subject'} below, and compare them against each provider's latest official requirements for your grades and goals.`,
        listTitle: (label) => `${label ? 'Recommended UK universities — ' + label : 'Recommended UK universities'}`,
        listSub: (label) => `Under each university we list ${label ? '<strong class="text-ink2">the courses you can enter in ' + label + '</strong>' : 'the courses you can enter'}.<br class="hidden sm:block">Select a university name or 'About' for its profile, strongest subjects and entry routes.`,
        filterAll: "All",
        filterIyo: "Runs IYO",
        filterFnd: "Runs a foundation",
        filterDirect: "A-level / IB entry",
        sortLabel: "Sort",
        sortQs: "QS ranking",
        sortAz: "Name A–Z",
        sortKo: "Korean name",
        countLine: (n, p, pages) => `${n} universities · page ${p} of ${pages}`,
        countNote: "Courses and requirements can change each term",
        prevPage: "Previous page",
        nextPage: "Next page",
        uniSub: (k, qs) => `QS #${qs}`,
        schoolInfo: "About",
        officialView: "Official site"
    }
};

/* ───────── 데이터 문자열 번역 (한글 원문 → 영어) ───────── */
const DATA_EN = {
    /* --- 공식 정보 링크 --- */
    "Study UK — 영국문화원 공식 유학 안내 (장학금 · 생활 정보)": "Study UK — the British Council's official guide (scholarships and living costs)",
    "영국 학생비자(Student visa) 공식 안내 — GOV.UK": "UK Student visa — official guidance on GOV.UK",
    "QS 세계 대학 순위 — 최신 랭킹 확인": "QS World University Rankings — the latest rankings",
    "UCAS — 영국 대학 학부 지원 공식 시스템": "UCAS — the official undergraduate application system",

    /* --- 석사 전공 계열 (majorCategories) --- */
    "경영 / 미디어 / 서비스 계열": "Business, media and services",
    "공학 / IT 계열": "Engineering and IT",
    "인문 / 사회 / 교육 계열": "Humanities, social sciences and education",
    "의생명 / 헬스케어 계열": "Biomedical and healthcare",

    /* --- 석사 전공명 (majorData 키) --- */
    "경영학 / MBA": "Business / MBA",
    "마케팅": "Marketing",
    "회계 / 재무": "Accounting / Finance",
    "미디어 / 커뮤니케이션": "Media / Communications",
    "스포츠 경영": "Sport Management",
    "컴퓨터과학 / IT": "Computer Science / IT",
    "데이터사이언스 / AI": "Data Science / AI",
    "사이버보안": "Cyber Security",
    "기계 / 항공우주공학": "Mechanical / Aerospace Engineering",
    "토목 / 구조공학": "Civil / Structural Engineering",
    "전기 / 전자공학": "Electrical / Electronic Engineering",
    "국제개발학": "International Development",
    "공공정책 / 행정 (MPA)": "Public Policy / Administration (MPA)",
    "법학 (LLM)": "Law (LLM)",
    "TESOL / 교육학": "TESOL / Education",
    "박물관학 / 예술경영": "Museum Studies / Arts Management",
    "생의과학 / 바이오": "Biomedical Science / Biotech",
    "심리학 (Conversion 포함)": "Psychology (incl. conversion)",
    "공중보건 (Public Health)": "Public Health",

    /* --- 석사 전공 소개 --- */
    "기업의 데이터와 시장을 분석하여 비즈니스 방향을 예측하고 의사결정을 내리는 현대 경영의 핵심 분야입니다. MBA, Management, Business Analytics 등이 포함되며 실무 연계가 뛰어납니다.":
        "This is the core of modern management: analysing company data and markets to forecast direction and make decisions. It spans the MBA, Management and Business Analytics, with strong links into industry.",
    "소비자 심리와 데이터 분석을 기반으로 브랜드 전략, 광고, 디지털 마케팅을 설계하는 분야입니다. 영국 석사는 1년 과정으로 글로벌 마케팅 실무 역량을 압축적으로 키울 수 있습니다.":
        "This field designs brand strategy, advertising and digital marketing from consumer psychology and data. A UK master's takes one year, building applied global marketing skills in a compressed course.",
    "기업 재무제표 분석, 투자, 금융시장 운용을 다루는 분야로 ACCA·CFA 등 국제 자격과의 연계가 뛰어납니다. 런던 금융가(City) 취업을 목표로 하는 유학생에게 가장 선호되는 전공 중 하나입니다.":
        "This field covers financial statement analysis, investment and financial markets, and links well to international qualifications such as ACCA and CFA. It is among the most popular choices for students aiming at careers in the City of London.",
    "미디어 종주국인 영국의 선진화된 커뮤니케이션 이론과 저널리즘 실무, 문화 콘텐츠 산업 전략을 심도 있게 탐구하는 분야입니다.":
        "This field explores communication theory, journalism practice and the strategy of the cultural content industries, in the country where much of modern media began.",
    "프리미어리그의 나라 영국에서 배우는 스포츠 비즈니스, 구단 경영, 스포츠 마케팅 분야입니다. 글로벌 스포츠 산업 전반의 경영 전략을 다룹니다.":
        "Sport business, club management and sport marketing, studied in the home of the Premier League. The field covers management strategy across the global sport industry.",
    "소프트웨어 개발, 알고리즘, 시스템 설계를 다루는 IT 산업의 근간 분야입니다. 영국은 유럽 최대 테크 허브(런던)를 중심으로 졸업 후 취업 기회가 풍부합니다.":
        "The bedrock of the IT industry: software development, algorithms and systems design. With Europe's largest tech hub in London, graduate opportunities in the UK are plentiful.",
    "4차 산업혁명의 핵심인 빅데이터와 인공지능을 다룹니다. 데이터 수집부터 모델링, 시각화까지 미래 유망 IT 산업의 고도화된 기술을 학습합니다.":
        "This field covers big data and artificial intelligence, from data collection through modelling to visualisation — the advanced skills behind the next generation of the IT industry.",
    "해킹 방어 체계 구축, 암호학, 보안 시스템 설계를 다루는 분야입니다. 영국 정부(NCSC) 인증 과정이 다수 운영되어 보안 전문가 커리어에 직결됩니다.":
        "This field covers defence against attacks, cryptography and the design of secure systems. Many UK courses carry government (NCSC) certification, leading directly into security careers.",
    "최첨단 모빌리티(항공우주/자동차)와 제조 기술을 다루는 산업의 근간입니다. 영국은 전통적으로 공학 분야에서 세계적인 산학협력 네트워크를 갖추고 있습니다.":
        "The foundation of advanced mobility — aerospace and automotive — and manufacturing technology. The UK has long-standing, world-class industry partnerships in engineering.",
    "인류의 생활환경을 설계하는 토목·구조·건설 분야입니다. 영국은 세계적인 엔지니어링 컨설팅 기업(Arup, Atkins 등)의 본고장으로 취업 연계가 강합니다.":
        "Civil, structural and construction engineering — designing the built environment. The UK is home to the world's leading engineering consultancies, including Arup and Atkins, with strong career links.",
    "반도체, 통신, 전력 시스템, 임베디드 시스템을 다루는 분야입니다. AI 하드웨어와 신재생 에너지 산업 성장으로 수요가 급증하고 있습니다.":
        "This field covers semiconductors, communications, power systems and embedded systems. Demand is rising fast with the growth of AI hardware and renewable energy.",
    "환경, 빈곤, 국제관계 등 글로벌 이슈를 연구하는 분야로, UN 등 국제기구 진출을 목표로 하는 학생과 공무원 국비 유학으로 가장 선호됩니다.":
        "The study of global issues — environment, poverty, international relations. It is the favourite choice of students aiming for the UN and other international organisations, and of government-sponsored officials.",
    "국가 발전의 틀을 짜는 행정학(MPA)과 공공정책학을 다룹니다. 한국 공무원 및 공공기관 국비 유학으로 가장 선호되는 분야입니다.":
        "Public administration (MPA) and public policy — the frameworks behind national development. It is the field most often chosen by sponsored Korean civil servants and public-sector staff.",
    "국제법, 상법, 금융법 중심의 영미법 석사(LLM) 과정입니다. 영국은 국제 상사중재와 금융법의 중심지로 글로벌 로펌 커리어에 직결됩니다.":
        "A common-law LLM centred on international, commercial and financial law. As the hub of international arbitration and financial law, the UK leads directly into global law firm careers.",
    "영어 교육의 본고장에서 배우는 TESOL과 교육학입니다. 교사 경력자와 교육 정책 전문가를 목표로 하는 학생 모두에게 적합합니다.":
        "TESOL and education, studied where English teaching began. It suits experienced teachers and future education policy specialists alike.",
    "예술경영과 박물관학(Museum Studies)을 심도 있게 탐구하는 문화/예술 융합 학문입니다. 박물관·갤러리·문화기관 커리어로 이어집니다.":
        "An interdisciplinary field spanning arts management and museum studies, leading to careers in museums, galleries and cultural institutions.",
    "첨단 의공학(Biomedical)부터 생명과학, 바이오테크까지 인간의 건강을 연구하는 분야입니다. 제약·바이오 산업과 연구직 커리어로 이어집니다.":
        "The study of human health, from biomedical engineering through the life sciences to biotech. It leads to careers in pharma, the bio industry and research.",
    "범죄/상담 심리학과 비전공자를 위한 심리학 전환(Conversion) 과정을 포함합니다. BPS(영국심리학회) 인증 과정 이수 시 심리학 커리어의 기반이 됩니다.":
        "This includes forensic and counselling psychology as well as conversion courses for graduates of other subjects. A BPS-accredited course is the foundation of a psychology career.",
    "인구 집단의 건강 증진과 질병 예방 정책을 연구하는 분야입니다. 보건 행정, 역학, 글로벌 헬스 커리어와 국제기구(WHO 등) 진출로 이어집니다.":
        "The study of population health and disease-prevention policy. It leads to careers in health administration, epidemiology and global health, and into organisations such as the WHO.",

    /* --- 랭킹 표기 --- */
    "세계 68위 / 영국 10위 (QS 2027, 비즈니스 초강세)": "World #68 / UK #10 (QS 2027 — exceptionally strong in business)",
    "세계 40위 (QS 2027, 러셀그룹)": "World #40 (QS 2027, Russell Group)",
    "세계 77위 / 영국 12위 (QS 2027, 러셀그룹)": "World #77 / UK #12 (QS 2027, Russell Group)",
    "세계 125위 / 영국 19위 (QS 2027, 경영 명문)": "World #125 / UK #19 (QS 2027 — renowned for management)",
    "Triple Crown 인증 LUMS 보유 (영국 상위권)": "Home of triple-crown-accredited LUMS (upper tier in the UK)",
    "미디어 & 커뮤니케이션 세계 12위 (QS 전공랭킹)": "World #12 for media & communications (QS subject rankings)",
    "세계 37위 (QS 2027, 러셀그룹)": "World #37 (QS 2027, Russell Group)",
    "스포츠 관련 학과 부동의 세계 1위 (QS 전공랭킹)": "The undisputed world #1 for sport subjects (QS subject rankings)",
    "세계 68위 (QS 2027, 러셀그룹)": "World #68 (QS 2027, Russell Group)",
    "세계 8위 (QS 2027, 러셀그룹)": "World #8 (QS 2027, Russell Group)",
    "세계 35위 (QS 2027, CS 분야 유럽 최고 수준)": "World #35 (QS 2027 — among Europe's best for computer science)",
    "세계 111위 / 영국 17위 (QS 2027, 러셀그룹)": "World #111 / UK #17 (QS 2027, Russell Group)",
    "항공우주 분야 영국 1위 (대학원 중심 대학)": "UK #1 for aerospace (a postgraduate-only university)",
    "세계 82위 / 영국 14위 (QS 2027, 러셀그룹)": "World #82 / UK #14 (QS 2027, Russell Group)",
    "개발학(Development Studies) 부동의 세계 1위": "The undisputed world #1 for development studies",
    "개발학 세계 Top 10 (Global Development Institute)": "World top 10 for development studies (Global Development Institute)",
    "세계 169위 / 영국 25위 (QS 2026, 사회정책 Top 10)": "World #169 / UK #25 (QS 2026 — top 10 for social policy)",
    "세계 80위 / 영국 13위 (QS 2027, 러셀그룹)": "World #80 / UK #13 (QS 2027, Russell Group)",
    "세계 110위 / 영국 18위 (QS 2026, LLM 명문)": "World #110 / UK #18 (QS 2026 — renowned for the LLM)",
    "교육학(Education) 부동의 세계 1위 (QS 전공랭킹)": "The undisputed world #1 for education (QS subject rankings)",
    "박물관학(Museum Studies) 압도적 세계 선두": "The clear world leader in museum studies",
    "예술 & 디자인 분야 세계 상위권 (QS 전공랭킹)": "Among the world's best for art & design (QS subject rankings)",
    "세계 8위 / 생명과학 및 의학 세계 최상위 (QS 2027)": "World #8 — world top tier for life sciences and medicine (QS 2027)",
    "세계 57위 (QS 2027, 심리학/보건 영국 Top 10)": "World #57 (QS 2027 — UK top 10 for psychology and health)",
    "세계 169위 / 영국 25위 (QS 2026, 심리학 강세)": "World #169 / UK #25 (QS 2026 — strong in psychology)",
    "세계 35위 (QS 2027, 의학·보건 세계 최상위권)": "World #35 (QS 2027 — world top tier for medicine and health)",

    /* --- 위치 표기 --- */
    "코번트리 (Coventry, 잉글랜드 중부)": "Coventry, central England",
    "맨체스터 (Manchester, 잉글랜드 북서부)": "Manchester, north-west England",
    "리즈 (Leeds, 잉글랜드 북부)": "Leeds, northern England",
    "바스 (Bath, 잉글랜드 남서부)": "Bath, south-west England",
    "랭커스터 (Lancaster, 잉글랜드 북서부)": "Lancaster, north-west England",
    "런던 (London, 잉글랜드)": "London",
    "런던 (London, 중심부)": "Central London",
    "런던 (London, 블룸즈버리 중심)": "London (Bloomsbury)",
    "러프버러 (Loughborough, 잉글랜드 중부)": "Loughborough, central England",
    "버밍엄 (Birmingham, 잉글랜드 중부)": "Birmingham, central England",
    "에든버러 (Edinburgh, 스코틀랜드)": "Edinburgh, Scotland",
    "사우샘프턴 (Southampton, 잉글랜드 남부)": "Southampton, southern England",
    "크랜필드 (Cranfield, 잉글랜드 베드퍼드셔)": "Cranfield, Bedfordshire",
    "셰필드 (Sheffield, 잉글랜드 중북부)": "Sheffield, northern England",
    "브라이튼 (Brighton, 잉글랜드 남부)": "Brighton, southern England",
    "요크 (York, 잉글랜드 북부)": "York, northern England",
    "글래스고 (Glasgow, 스코틀랜드)": "Glasgow, Scotland",
    "레스터 (Leicester, 잉글랜드 중부)": "Leicester, central England",
    "브리스톨 (Bristol, 잉글랜드 남서부)": "Bristol, south-west England",

    /* --- 학비 표기 --- */
    "약 £35,000 ~ £38,000": "approx. £35,000–£38,000",
    "약 £33,000 ~ £36,000": "approx. £33,000–£36,000",
    "약 £32,000 ~ £35,000": "approx. £32,000–£35,000",
    "약 £28,000 ~ £30,000": "approx. £28,000–£30,000",
    "약 £31,000 ~ £34,000": "approx. £31,000–£34,000",
    "약 £28,000 ~ £31,000": "approx. £28,000–£31,000",
    "약 £24,000 ~ £26,000": "approx. £24,000–£26,000",
    "약 £29,000 ~ £32,000": "approx. £29,000–£32,000",
    "약 £31,000 ~ £33,000": "approx. £31,000–£33,000",
    "약 £27,000 ~ £29,000": "approx. £27,000–£29,000",
    "약 £40,000 ~ £44,000": "approx. £40,000–£44,000",
    "약 £38,500 ~ £42,000": "approx. £38,500–£42,000",
    "약 £35,000 ~ £39,000": "approx. £35,000–£39,000",
    "LLM (International Business Law 등 20+ 트랙)": "LLM (20+ tracks, incl. International Business Law)",
    "약 £30,000 ~ £33,000": "approx. £30,000–£33,000",
    "약 £30,000 ~ £32,000": "approx. £30,000–£32,000",
    "약 £29,000 ~ £31,000": "approx. £29,000–£31,000",
    "약 £32,000 ~ £34,000": "approx. £32,000–£34,000",
    "약 £23,000 ~ £25,000": "approx. £23,000–£25,000",
    "약 £25,000 ~ £27,000": "approx. £25,000–£27,000",
    "약 £27,000 ~ £30,000": "approx. £27,000–£30,000",
    "약 £26,000 ~ £28,000": "approx. £26,000–£28,000",
    "약 £22,000 ~ £24,000": "approx. £22,000–£24,000",
    "약 £35,000 ~ £40,000": "approx. £35,000–£40,000",
    "약 £26,000 ~ £29,000": "approx. £26,000–£29,000",

    /* --- 석사 학교별 소개 --- */
    "Warwick Business School(WBS)은 세계 1%에 해당하는 Triple Crown 인증을 받은 명문입니다. 리서치뿐만 아니라 강력한 산학연계 커리어 센터를 운영합니다.":
        "Warwick Business School holds the triple-crown accreditation earned by the top 1% of business schools worldwide. Alongside its research, it runs a strong industry-linked careers centre.",
    "Alliance MBS는 영국 최대 규모의 비즈니스 스쿨 중 하나로, 철저한 실무 중심의 산학 연계 프로젝트(Business in Practice)를 제공합니다.":
        "Alliance MBS is one of the UK's largest business schools, known for its thoroughly practice-based, industry-linked Business in Practice projects.",
    "Alliance MBS의 마케팅 석사는 소비자 행동, 브랜드 관리, 디지털 마케팅을 아우르며 글로벌 기업과의 라이브 프로젝트 기회가 풍부합니다.":
        "The Alliance MBS marketing master's spans consumer behaviour, brand management and digital marketing, with plenty of live projects run with global companies.",
    "Leeds University Business School의 대표 인기 과정으로, 광고 기획과 마케팅 전략을 균형 있게 다루며 실무 포트폴리오 중심 커리큘럼을 운영합니다.":
        "Leeds University Business School's flagship course balances advertising and marketing strategy, built around a practical portfolio curriculum.",
    "Bath School of Management는 영국 내 취업률 최상위권 비즈니스 스쿨로, 회계·재무 분야에서 탄탄한 커리큘럼과 금융권 네트워크를 자랑합니다.":
        "Bath School of Management ranks among the UK's best for graduate employment, with a solid accounting and finance curriculum and strong networks into the finance industry.",
    "Lancaster University Management School(LUMS)은 세계 1% Triple Crown 인증 비즈니스 스쿨로, 회계·재무 리서치 분야에서 영국 최상위권 평가를 받습니다.":
        "Lancaster University Management School holds the triple-crown accreditation of the world's top 1% of business schools, and its accounting and finance research is rated at the very top in the UK.",
    "창의적이고 혁신적인 런던대 소속 대학으로, 미디어, 문화연구, 예술 분야에서 세계적인 명성을 구가하며 수많은 미디어계 거장을 배출했습니다.":
        "A creative, innovative member of the University of London with a worldwide reputation in media, cultural studies and the arts — and a long list of celebrated media alumni.",
    "런던 중심부에 위치해 방송·출판·문화예술 산업과의 접점이 뛰어나며, 문화산업 정책과 콘텐츠 비즈니스를 아우르는 커리큘럼을 제공합니다.":
        "Its central London position keeps it close to broadcasting, publishing and the cultural industries, with a curriculum spanning cultural policy and the content business.",
    "수년 연속 스포츠 관련 전공 세계 1위를 차지하고 있으며, 올림픽 선수촌 수준의 시설과 글로벌 스포츠 기업들과의 압도적인 네트워크를 자랑합니다.":
        "Ranked world #1 for sport subjects year after year, with facilities of Olympic-village standard and unmatched networks into global sport companies.",
    "스포츠 정책과 비즈니스를 함께 다루는 균형 잡힌 커리큘럼으로, 러셀그룹 명문에서 스포츠 산업 경영 전문성을 쌓을 수 있습니다.":
        "A balanced curriculum covering both sport policy and business, building sport-industry management expertise at a leading Russell Group university.",
    "세계 최상위권 종합대학으로, 컴퓨터과학 전 분야에서 뛰어난 연구 역량과 런던 테크 산업과의 강력한 연결고리를 갖추고 있습니다.":
        "A world top-tier university with outstanding research across the whole of computer science and strong ties into London's tech industry.",
    "컴퓨터의 아버지 앨런 튜링이 재직했던 CS 명문으로, AI·소프트웨어공학·시스템 분야의 폭넓은 세부 트랙을 제공합니다.":
        "A computer science powerhouse where Alan Turing once worked, offering a wide choice of tracks across AI, software engineering and systems.",
    "인포매틱스 분야에서 영국 최고 수준의 연구 성과를 자랑하며, 인공지능과 빅데이터 분야에서 스코틀랜드와 유럽의 선두주자입니다.":
        "Home to the UK's leading informatics research, and a front-runner in artificial intelligence and big data for Scotland and Europe.",
    "런던 중심부에 위치하여 금융권 및 글로벌 IT 기업들과의 네트워크가 뛰어납니다. 데이터 알고리즘과 응용 데이터 분석 연구에 특화되어 있습니다.":
        "Its central London location brings strong networks into finance and global IT companies, with a research focus on data algorithms and applied data analysis.",
    "복잡한 시스템의 보안 및 사이버 위협 분석에 특화되어 있으며, 런던 금융권·정부기관과의 보안 협력 프로젝트가 활발합니다.":
        "Specialises in securing complex systems and analysing cyber threats, with active security projects alongside London's finance industry and government bodies.",
    "영국 정부 공인 사이버보안 연구 우수센터(ACE-CSR)로 지정된 명문으로, 전자·컴퓨터공학(ECS) 학부의 탄탄한 인프라를 기반으로 합니다.":
        "A government-recognised Academic Centre of Excellence in Cyber Security Research (ACE-CSR), built on the strong infrastructure of its Electronics and Computer Science school.",
    "영국 내 유일하게 공항을 자체 소유한 대학원으로, Rolls-Royce, BAE Systems 등 글로벌 항공/자동차 기업들과의 독보적인 공동 프로젝트를 진행합니다.":
        "The only UK university with its own airport, running joint projects with global aerospace and automotive companies including Rolls-Royce and BAE Systems.",
    "러셀그룹 소속으로, 기계·항공공학 분야에서 탁월한 연구 실적과 첨단 실험 시설(Diamond 건물), Boeing과의 공동 연구센터(AMRC)를 보유하고 있습니다.":
        "A Russell Group member with an excellent record in mechanical and aerospace engineering, advanced facilities in the Diamond building, and the AMRC joint research centre with Boeing.",
    "토목공학 분야에서 영국 최상위권 연구 실적을 보유하며, 구조·지반·수자원 등 폭넓은 세부 전공 트랙을 제공합니다.":
        "Among the UK's strongest for civil engineering research, offering a broad choice of tracks across structural, geotechnical and water engineering.",
    "영국 최대 규모 공과대학 중 하나로, 구조공학·환경토목 분야의 산업체 연계 프로젝트와 JBM 공인 커리큘럼을 운영합니다.":
        "One of the UK's largest engineering faculties, running industry-linked projects in structural and environmental engineering on a JBM-accredited curriculum.",
    "전자컴퓨터공학부(ECS)는 영국 전자공학 분야의 최고 명문 중 하나로, 반도체 클린룸 등 세계적 수준의 연구 인프라를 자랑합니다.":
        "Its Electronics and Computer Science school is among the UK's very best for electronic engineering, with world-class facilities including a semiconductor cleanroom.",
    "그래핀을 최초 분리한 노벨상 연구의 산실로, 전력시스템·반도체·나노소재 분야에서 세계적인 연구 역량을 보유하고 있습니다.":
        "The home of the Nobel-winning research that first isolated graphene, with world-class strength in power systems, semiconductors and nanomaterials.",
    "수년간 하버드, 옥스퍼드를 제치고 개발학 분야 세계 1위를 수성하고 있는 명실상부한 최고 명문으로, UN 등 국제기구 진출에 유리합니다.":
        "For years it has held the world #1 spot for development studies ahead of Harvard and Oxford, and it is a strong springboard into the UN and other international organisations.",
    "유럽 최대 규모의 개발학 연구소(GDI)를 보유하고 있으며, 빈곤·환경·글로벌 거버넌스 등 다양한 세부 트랙을 선택할 수 있습니다.":
        "Home to Europe's largest development research institute (GDI), with tracks to choose from across poverty, environment and global governance.",
    "공공정책(Public Policy) 및 행정학(MPA) 분야에서 뛰어난 성과를 내고 있으며, 한국 공무원 및 정부 산하기관 임직원들이 가장 선호하는 대학 중 하나입니다.":
        "A strong performer in public policy and the MPA, and one of the universities most often chosen by Korean civil servants and public-agency staff.",
    "스코틀랜드 명문 러셀그룹 대학으로, 공공관리와 정책 분석을 결합한 실무형 커리큘럼을 제공하며 국제 공공부문 네트워크가 탄탄합니다.":
        "A leading Scottish Russell Group university, offering an applied curriculum that combines public management with policy analysis and solid networks across the international public sector.",
    "런던대 소속 러셀그룹 대학으로, 세계 최대 규모의 LLM 프로그램과 국제상사법·중재 분야의 압도적인 명성을 자랑합니다.":
        "A University of London and Russell Group member, running the world's largest LLM programme with a commanding reputation in international commercial law and arbitration.",
    "법학(LLM) 분야에서 영국 상위권에 위치하며, 다양한 모듈 선택권을 통해 학생 맞춤형 커리큘럼을 제공합니다.":
        "Among the UK's best for the LLM, with a wide choice of modules that lets you shape the course to your own plans.",
    "UCL 교육대학원(IOE)은 수년 연속 교육학 분야 세계 1위를 지키고 있는 교육학의 최고 명문으로, 교육정책·리더십·TESOL 등 폭넓은 과정을 운영합니다.":
        "UCL's Institute of Education has held the world #1 ranking for education year after year, running a broad range of courses across policy, leadership and TESOL.",
    "교육학 및 영어교육(TESOL) 분야에서 영국 상위권에 위치하며, 다양한 모듈 선택권을 통해 학생 맞춤형 커리큘럼을 제공합니다.":
        "Among the UK's best for education and TESOL, with a wide choice of modules that lets you shape the course to your own plans.",
    "박물관학 분야에서 가장 오랜 역사와 최고 수준의 연구 실적을 자랑하며, 전 세계 박물관 및 갤러리와 광범위한 산학연계(Placement)를 맺고 있습니다.":
        "The longest history and strongest research record in museum studies, with placement links to museums and galleries worldwide.",
    "런던의 풍부한 문화예술 인프라를 활용한 예술경영·문화정책 과정으로, 갤러리·극장·문화재단과의 현장 연계가 활발합니다.":
        "An arts management and cultural policy course that draws on London's cultural life, with active links into galleries, theatres and arts foundations.",
    "런던 중심부에 위치한 명문으로, 뇌과학 및 생명과학, 공중보건 분야에서 세계 최상위권의 연구 역량과 병원 인프라를 갖추고 있습니다.":
        "A leading university in central London, with world top-tier research and hospital infrastructure across neuroscience, the life sciences and public health.",
    "생명의학 연구 분야에서 영국 최상위권 인프라를 갖춘 스코틀랜드 명문으로, 대학병원과 연계된 실습 중심 커리큘럼을 제공합니다.":
        "A leading Scottish university with top-tier biomedical research infrastructure and a practice-focused curriculum linked to its teaching hospitals.",
    "비전공자를 위한 심리학 석사(Conversion - BPS 인증) 과정이 매우 우수하며, 응용 신경심리학 등 세부 전공에서도 뛰어난 성과를 보여줍니다.":
        "Its BPS-accredited psychology conversion master's for graduates of other subjects is excellent, and specialist areas such as applied neuropsychology are equally strong.",
    "BPS 인증 심리학 전환 과정을 운영하는 심리학 연구 명문으로, 합리적인 학비와 안정적인 학업 환경으로 한국 학생들의 만족도가 높습니다.":
        "A strong psychology research university running a BPS-accredited conversion course, well liked by Korean students for its reasonable tuition and settled study environment.",
    "세계적인 의과대학 전통을 기반으로 한 MPH 과정으로, 역학·보건정책·글로벌 헬스를 아우르는 커리큘럼을 제공합니다.":
        "An MPH built on a world-renowned medical school tradition, spanning epidemiology, health policy and global health.",
    "보건학 연구 명문으로 WHO 협력센터를 보유하고 있으며, 실무 중심의 공중보건 교육과 합리적인 학비가 강점입니다.":
        "A leading health research university and WHO collaborating centre, with practice-focused public health teaching and reasonable tuition.",

    /* --- 석사 질문 · 선택지 --- */
    '현재 보유하신 공인 영어 성적(IELTS, TOEFL, PTE 등)이 있으신가요?<br><span class="block mt-3 text-[13px] text-gray-500 leading-relaxed">※ 영국 대학은 총점뿐 아니라 각 영역별(Writing/Speaking 등) 세부 점수를 함께 보기 때문에, 최종 합격 가능 여부는 정확한 점수 확인이 필요합니다.</span>':
        'Do you hold an English test result (IELTS, TOEFL, PTE)?<br><span class="block mt-3 text-[13px] text-gray-500 leading-relaxed">UK universities look at the component scores (writing, speaking and so on) as well as the overall band, so a final decision needs your exact scores.</span>',
    "IELTS 7.0 이상 (안정권)": "IELTS 7.0+ (comfortable)",
    "IELTS 7.0 이상": "IELTS 7.0+",
    "IELTS 6.0 ~ 6.5 (보완/프리세셔널)": "IELTS 6.0–6.5 (pre-sessional range)",
    "IELTS 5.5 이하 / 아직 준비 전": "IELTS 5.5 or below / not taken yet",
    "준비 전": "Not yet",
    "기타 (TOEFL · PTE 등 다른 시험)": "Other test (TOEFL, PTE, etc.)",
    "학부(대학교) 최종 성적(GPA)은 어느 정도이신가요? (4.5 만점 기준)": "What was your final undergraduate GPA (out of 4.5)?",
    "4.0 이상 (매우 우수)": "4.0 or above (excellent)",
    "4.0 이상": "4.0 or above",
    "3.5 ~ 3.9 (양호/보통)": "3.5–3.9 (good)",
    "3.0 ~ 3.4 (보완 필요)": "3.0–3.4 (needs strengthening)",
    "3.0 미만 (패스웨이 고려)": "Below 3.0 (consider a pathway)",
    "3.0 미만": "Below 3.0",
    "영국 석사 과정에서 희망하시는 전공 계열을 먼저 선택해주세요. 계열 선택 후 세부 전공을 고르실 수 있습니다.":
        "First choose the subject area for your master's. You can pick a specific course next.",
    "지원하실 석사 전공이 학부 때 전공하신 분야와 동일한가요?": "Is the master's in the same field as your undergraduate degree?",
    "네, 동일/유사 전공입니다 (전공자)": "Yes — the same or a similar field",
    "전공자": "Same field",
    "아니요, 분야를 바꿉니다 (비전공자)": "No — I am changing field",
    "비전공자": "Changing field",
    "※ 학교별로 비전공자의 경우 관련 경력을 요구할 수 있습니다.": "Some universities ask career changers for related work experience.",
    "진학 시 가장 중요하게 생각하시는 목표나 기준은 무엇인가요?": "What matters most to you in choosing where to study?",
    "세계 랭킹 최상위권 (명성 위주)": "The highest world rankings (prestige first)",
    "세계 랭킹 우선": "World ranking first",
    "전공별 랭킹 및 실무/취업 연계": "Subject rankings and career links",
    "실무 및 취업 연계": "Careers and employability",
    "나의 성적에 맞춘 가장 안정적인 합격": "The safest offer for my grades",
    "안정성 우선": "A safe offer",

    /* --- 학부 대학 한글명 --- */
    "임페리얼 칼리지 런던": "Imperial College London",
    "옥스퍼드대학교": "University of Oxford",
    "케임브리지대학교": "University of Cambridge",
    "유니버시티 칼리지 런던": "University College London",
    "에든버러대학교": "University of Edinburgh",
    "킹스 칼리지 런던": "King's College London",
    "맨체스터대학교": "University of Manchester",
    "브리스톨대학교": "University of Bristol",
    "런던정치경제대학교": "London School of Economics",
    "워릭대학교": "University of Warwick",
    "버밍엄대학교": "University of Birmingham",
    "리즈대학교": "University of Leeds",
    "글래스고대학교": "University of Glasgow",
    "셰필드대학교": "University of Sheffield",
    "더럼대학교": "Durham University",
    "노팅엄대학교": "University of Nottingham",
    "사우샘프턴대학교": "University of Southampton",
    "세인트앤드루스대학교": "University of St Andrews",
    "바스대학교": "University of Bath",
    "엑서터대학교": "University of Exeter",
    "뉴캐슬대학교": "Newcastle University",
    "랭커스터대학교": "Lancaster University",
    "서식스대학교": "University of Sussex",
    "요크대학교": "University of York",
    "러프버러대학교": "Loughborough University",
    "퀸메리 런던대학교": "Queen Mary University of London",

    /* --- 도시명 --- */
    "런던": "London", "옥스퍼드": "Oxford", "케임브리지": "Cambridge", "에든버러": "Edinburgh",
    "맨체스터": "Manchester", "브리스톨": "Bristol", "코번트리": "Coventry", "버밍엄": "Birmingham",
    "리즈": "Leeds", "글래스고": "Glasgow", "셰필드": "Sheffield", "더럼": "Durham",
    "노팅엄": "Nottingham", "사우샘프턴": "Southampton", "세인트앤드루스": "St Andrews",
    "바스": "Bath", "엑서터": "Exeter", "뉴캐슬": "Newcastle", "랭커스터": "Lancaster",

    /* --- 파운데이션 경로 라벨 --- */
    "UCL UPC (자체 운영)": "UCL UPC (university-run)",
    "자체 국제 파운데이션": "University-run international foundation",
    "King's Foundations (자체)": "King's Foundations (university-run)",
    "INTO Manchester 제휴": "INTO Manchester (partner)",
    "Kaplan 제휴 파운데이션": "Kaplan partner foundation",
    "Warwick IFP (자체)": "Warwick IFP (university-run)",
    "BIA (Kaplan 제휴)": "BIA (Kaplan partner)",
    "Leeds ISC (Study Group 제휴)": "Leeds ISC (Study Group partner)",
    "GIC (Kaplan 제휴)": "GIC (Kaplan partner)",
    "USIC (Study Group 제휴)": "USIC (Study Group partner)",
    "Durham ISC (Study Group 제휴)": "Durham ISC (Study Group partner)",
    "UNIC (Kaplan 제휴)": "UNIC (Kaplan partner)",
    "자체 International Foundation": "University-run International Foundation",
    "INTO Exeter (캠퍼스 내)": "INTO Exeter (on campus)",
    "INTO Newcastle (캠퍼스 내)": "INTO Newcastle (on campus)",
    "Lancaster ISC (INTO 제휴)": "Lancaster ISC (INTO partner)",

    /* --- 학부 대학 노트 --- */
    "국제학생 파운데이션 미운영. A-level·IB 등 인정 고교 과정 성적으로 지원하는 최상위 이공계 명문입니다.":
        "Runs no international foundation. A top-tier science and engineering university admitting on recognised school qualifications such as A-levels and the IB.",
    "파운데이션 경로가 없어 A-level·IB 최상위 성적과 입학시험·인터뷰로 선발합니다.":
        "No foundation route — selection rests on top A-level or IB results plus admissions tests and interviews.",
    "국제학생 대상 파운데이션이 없어 A-level·IB 최상위 성적으로 지원합니다.":
        "No foundation for international students — applications need top A-level or IB results.",
    "1991년부터 자체 국제 파운데이션(UPC)을 운영. 수료 성적으로 UCL 및 다른 상위권 대학 지원이 가능합니다.":
        "Has run its own international foundation (UPC) since 1991. Completion grades support applications to UCL and other leading universities.",
    "스코틀랜드 4년제 학사 구조로 파운데이션 없이도 지원 폭이 상대적으로 넓은 편입니다.":
        "Scotland's four-year degree structure means entry without a foundation is comparatively open.",
    "런던 중심의 명문으로 자체 국제 파운데이션을 통해 인문·사회·이공 전공으로 진입합니다.":
        "A central London university whose own international foundation leads into humanities, social science and STEM degrees.",
    "INTO Manchester 파운데이션 수료 후 진입. NCUK 연계로 다른 북부 명문 지원도 가능합니다.":
        "Entry follows the INTO Manchester foundation; the NCUK link also opens applications to other leading northern universities.",
    "이공계·사회과학이 고루 강한 명문으로 파운데이션 경유 진학 수요가 많습니다.":
        "Strong across both STEM and social science, with heavy demand for entry via the foundation route.",
    "자체 파운데이션이 없어 A-level·IB 전형이 기본. UCL UPC 등 타 기관 파운데이션 수료 후 지원하는 사례가 많습니다.":
        "No foundation of its own, so A-level / IB entry is the default. Many applicants come through other providers' foundations such as UCL UPC.",
    "1983년부터 운영된 영국 최장수급 자체 파운데이션(IFP). 경영·수학 계열 진입 경로로 특히 유명합니다.":
        "One of the UK's longest-running university foundations (IFP, since 1983), best known as a route into business and mathematics.",
    "캠퍼스 내 파운데이션(BIA)을 대학 교수진이 직접 강의하고 Kaplan이 입학을 관리합니다.":
        "The on-campus foundation (BIA) is taught by the university's own academics, with admissions managed by Kaplan.",
    "파운데이션과 IYO를 모두 운영. 비즈니스 계열 2학년 편입 루트가 활발합니다.":
        "Runs both a foundation and an IYO, with an active year-2 entry route in business subjects.",
    "Kaplan 제휴 GIC 파운데이션 경유. 스코틀랜드 명문 특유의 폭넓은 전공 선택이 강점입니다.":
        "Entry via the Kaplan-partnered GIC foundation. The broad subject choice typical of Scottish universities is a strength.",
    "USIC에서 파운데이션·IYO 모두 운영. 공학 계열 진입 경로가 탄탄합니다.":
        "USIC runs both the foundation and the IYO, with a solid entry route into engineering.",
    "영국 전통 명문. ISC 파운데이션 경유 진학이 기본이며, IYO 개설 여부는 학기별로 달라 기관 공식 페이지에서 확인이 필요합니다.":
        "A long-established university. Entry runs through the ISC foundation; IYO availability varies by term, so check the provider's official pages.",
    "UNIC에서 파운데이션과 IYO를 모두 운영. 비즈니스·공학 2학년 편입 경로가 열려 있습니다.":
        "UNIC runs both the foundation and the IYO, with year-2 entry open in business and engineering.",
    "공학·컴퓨터 강세의 러셀그룹. 자체 파운데이션으로 이공 계열 진입이 안정적입니다.":
        "A Russell Group university strong in engineering and computing, with a reliable route into STEM through its own foundation.",
    "영국 국내 평가 1~2위권 스코틀랜드 최고(最古) 명문. 자체 파운데이션으로 진입합니다.":
        "Scotland's oldest university, ranked first or second in UK domestic league tables. Entry is through its own foundation.",
    "경영·건축 강세 명문. 대형 국제 파운데이션이 없어 A-level·IB 전형 또는 타 기관 파운데이션 수료 후 지원합니다.":
        "Renowned for management and architecture. With no large international foundation, entry is by A-level / IB or after completing another provider's foundation.",
    "캠퍼스 내 INTO 센터에서 파운데이션·IYO 모두 운영. 올해 QS 19계단 상승한 러셀그룹입니다.":
        "The on-campus INTO centre runs both the foundation and the IYO. A Russell Group university that climbed 19 places in this year's QS rankings.",
    "캠퍼스 내 INTO 센터에서 파운데이션·IYO(iCAS) 모두 운영. 학생 도시 물가가 합리적입니다.":
        "The on-campus INTO centre runs both the foundation and the IYO (iCAS), in a student city with reasonable living costs.",
    "영국 국내 평가 Top 15 단골 명문. ISC 파운데이션 경유, 세부 과정 개설은 기관 공식 페이지에서 최신 확인이 필요합니다.":
        "A regular in the UK domestic top 15. Entry via the ISC foundation; check the provider's official pages for current course availability.",

    /* --- 학부 계열 --- */
    "경영 · 경제 · 금융": "Business, economics and finance",
    "공학 (기계 · 전자 · 토목 등)": "Engineering (mechanical, electronic, civil...)",
    "컴퓨터 · 데이터 · AI": "Computing, data and AI",
    "사회과학 · 미디어 · 국제관계": "Social sciences, media and international relations",
    "자연과학 · 수학": "Natural sciences and mathematics",
    "인문 · 어학 · 예술": "Humanities, languages and the arts",
    "경영학 (Business Management)": "Business Management",
    "경제학 (Economics)": "Economics",
    "회계 · 재무 (Accounting & Finance)": "Accounting & Finance",
    "국제경영 (International Business)": "International Business",
    "마케팅 (Marketing)": "Marketing",
    "기계공학 (Mechanical Eng.)": "Mechanical Engineering",
    "전기 · 전자공학 (Electrical & Electronic Eng.)": "Electrical & Electronic Engineering",
    "토목공학 (Civil Eng.)": "Civil Engineering",
    "항공우주공학 (Aerospace Eng.)": "Aerospace Engineering",
    "화학공학 (Chemical Eng.)": "Chemical Engineering",
    "컴퓨터과학 (Computer Science)": "Computer Science",
    "인공지능 (Artificial Intelligence)": "Artificial Intelligence",
    "데이터사이언스 (Data Science)": "Data Science",
    "소프트웨어공학 (Software Eng.)": "Software Engineering",
    "사이버보안 (Cyber Security)": "Cyber Security",
    "국제관계학 (International Relations)": "International Relations",
    "정치학 (Politics)": "Politics",
    "미디어 · 커뮤니케이션 (Media & Communication)": "Media & Communication",
    "사회학 (Sociology)": "Sociology",
    "심리학 (Psychology)": "Psychology",
    "수학 (Mathematics)": "Mathematics",
    "물리학 (Physics)": "Physics",
    "화학 (Chemistry)": "Chemistry",
    "생명과학 (Biological Sciences)": "Biological Sciences",
    "통계학 (Statistics)": "Statistics",
    "영문학 (English)": "English",
    "언어학 (Linguistics)": "Linguistics",
    "역사학 (History)": "History",
    "건축학 (Architecture)": "Architecture",
    "디자인 (Design)": "Design",

    /* --- 사설 파운데이션 기관 --- */
    "대학 캠퍼스 내 · 오픈 초이스": "On university campuses · open choice",
    "Westminster · Southampton · Aston · Loughborough · Sunderland · London 소재 다수": "Westminster · Southampton · Aston · Loughborough · Sunderland · many in London",
    "대학 제휴 + INTO London(오픈 초이스)": "University partners + INTO London (open choice)",
    "오픈 초이스 · Bristol 진학 보장": "Open choice · guaranteed progression to Bristol",
    "Bristol(보장) · Exeter · Leeds · Newcastle · Aston · 그 외 다수": "Bristol (guaranteed) · Exeter · Leeds · Newcastle · Aston · and more",
    "오픈 초이스 · Kaplan London→Bristol 보장": "Open choice · Kaplan London → Bristol guaranteed",
    "Bristol(보장) · Birmingham · Glasgow · Nottingham · York · Liverpool · Bournemouth · UWE · Essex": "Bristol (guaranteed) · Birmingham · Glasgow · Nottingham · York · Liverpool · Bournemouth · UWE · Essex",
    "파운데이션 · A-level 병행": "Foundation alongside A-levels",
    "중상위권 대학 오픈 초이스(성적에 맞춰 지원)": "Open choice across mid-to-upper-ranked universities, matched to your grades",

    /* --- 대학 상세 (UNI_INFO) : 설립 · 위치 · 학생 수 --- */
    "1907년": "1907", "11세기 말": "Late 11th century", "1209년": "1209", "1826년": "1826",
    "1582년": "1582", "1829년": "1829", "1824년": "1824", "1876년": "1876", "1895년": "1895",
    "1965년": "1965", "1900년": "1900", "1904년": "1904", "1451년": "1451", "1905년": "1905",
    "1832년": "1832", "1881년": "1881", "1862년": "1862", "1413년": "1413", "1856년": "1856",
    "1838년": "1838", "1834년": "1834", "1964년": "1964", "1961년": "1961", "1963년": "1963",
    "1909년": "1909", "1785년": "1785",
    "런던 사우스켄싱턴": "South Kensington, London",
    "런던 블룸스버리": "Bloomsbury, London",
    "스코틀랜드 에든버러": "Edinburgh, Scotland",
    "런던 중심부": "Central London",
    "잉글랜드 남서부 브리스톨": "Bristol, south-west England",
    "잉글랜드 중부 코번트리": "Coventry, central England",
    "잉글랜드 중부 버밍엄": "Birmingham, central England",
    "잉글랜드 중북부 리즈": "Leeds, northern England",
    "스코틀랜드 글래스고": "Glasgow, Scotland",
    "잉글랜드 북부 셰필드": "Sheffield, northern England",
    "잉글랜드 북부 더럼": "Durham, northern England",
    "잉글랜드 중부 노팅엄": "Nottingham, central England",
    "잉글랜드 남부 사우샘프턴": "Southampton, southern England",
    "스코틀랜드 세인트앤드루스": "St Andrews, Scotland",
    "잉글랜드 바스": "Bath, England",
    "잉글랜드 남서부 엑서터": "Exeter, south-west England",
    "잉글랜드 북동부 뉴캐슬": "Newcastle, north-east England",
    "잉글랜드 북서부 랭커스터": "Lancaster, north-west England",
    "잉글랜드 남부 브라이튼": "Brighton, southern England",
    "잉글랜드 요크": "York, England",
    "잉글랜드 러프버러": "Loughborough, England",
    "런던 동부": "East London",
    "약 19,000명": "c. 19,000", "약 26,000명": "c. 26,000", "약 24,000명": "c. 24,000",
    "약 32,800명": "c. 32,800", "약 43,000명": "c. 43,000", "약 31,000명": "c. 31,000",
    "약 40,250명": "c. 40,250", "약 27,500명": "c. 27,500", "약 12,000명": "c. 12,000",
    "약 27,300명": "c. 27,300", "약 34,000명": "c. 34,000", "약 38,000명": "c. 38,000",
    "약 29,000명": "c. 29,000", "약 40,000명": "c. 40,000", "약 18,700명": "c. 18,700",
    "약 34,300명": "c. 34,300", "약 24,600명": "c. 24,600", "약 10,000명": "c. 10,000",
    "약 24,000명": "c. 24,000", "약 28,000명": "c. 28,000", "약 16,000명": "c. 16,000",
    "약 17,000명": "c. 17,000", "약 15,000명": "c. 15,000",
    "약 27,000명": "c. 27,000",

    /* --- 대학 상세 : 우세 전공 --- */
    "공학": "Engineering", "컴퓨터과학": "Computer Science", "수학": "Mathematics",
    "전기·전자공학": "Electrical & Electronic Engineering", "지구과학": "Earth Sciences",
    "의학": "Medicine", "경영학": "Business", "PPE(철학·정치·경제)": "PPE (Philosophy, Politics & Economics)",
    "법학": "Law", "자연과학": "Natural Sciences", "인문학": "Humanities", "경제학": "Economics",
    "영문학": "English Literature", "보건학": "Health Sciences", "심리학": "Psychology",
    "건축학": "Architecture", "미술사": "History of Art", "물리학": "Physics",
    "언어학": "Linguistics", "교육학": "Education", "철학": "Philosophy", "금융": "Finance",
    "간호학": "Nursing", "수의학": "Veterinary Medicine", "정신의학": "Psychiatry",
    "전쟁학": "War Studies", "정치학": "Politics", "미디어": "Media", "치의학": "Dentistry",
    "화학공학": "Chemical Engineering", "기계공학": "Mechanical Engineering",
    "국제개발": "International Development", "항공·제조공학": "Aerospace & Manufacturing Engineering",
    "사회정책": "Social Policy", "정책학": "Public Policy", "국제관계학": "International Relations",
    "인류학": "Anthropology", "언론학": "Journalism", "회계·재무": "Accounting & Finance",
    "스포츠·재활과학": "Sport & Rehabilitation Sciences", "경영": "Management",
    "광전자공학": "Optoelectronics", "도시계획": "Urban Planning", "저널리즘": "Journalism",
    "항공공학": "Aeronautical Engineering", "국제관계": "International Relations",
    "역사학": "History", "비즈니스": "Business", "지리학": "Geography", "약학": "Pharmacy",
    "전자공학": "Electronic Engineering", "컴퓨터공학": "Computer Engineering", "음악": "Music",
    "고전학": "Classics", "회계학": "Accounting", "재무학": "Finance", "스포츠과학": "Sport Science",
    "미디어학": "Media Studies", "국제교육학": "International Education", "화학": "Chemistry",
    "스포츠경영": "Sport Management", "스포츠마케팅": "Sport Marketing",
    "항공우주공학": "Aerospace Engineering", "미디어&필름": "Media & Film",

    /* --- 대학 상세 : 소개 --- */
    "과학·기술·의학·경영에만 집중하는 연구중심 이공계 명문. 노벨상 수상자 14명을 배출했으며, 재학생의 59% 이상이 해외 출신인 세계에서 가장 국제적인 대학 중 하나입니다.":
        "A research university devoted solely to science, engineering, medicine and business. It counts 14 Nobel laureates, and with over 59% of students from outside the UK it is among the most international universities in the world.",
    "영어권에서 가장 오래된 대학이자 세계 최상위 명문. 39개 컬리지로 구성된 컬리지 시스템과 튜토리얼 중심 교육이 특징이며, 국제학생은 A-level·IB 최상위 성적으로 지원합니다.":
        "The oldest university in the English-speaking world and one of its very best. Known for its 39-college system and tutorial teaching; international students apply with top A-level or IB results.",
    "옥스퍼드와 함께 '옥스브리지'로 불리는 세계 최상위 명문. 31개 컬리지 체제로 운영되며 수학·자연과학 전통이 특히 강력합니다. 노벨상 배출 세계 최다 수준입니다.":
        "With Oxford it forms 'Oxbridge', the pinnacle of UK universities. It runs on a 31-college system, its mathematics and natural sciences tradition is exceptional, and its Nobel count is among the highest anywhere.",
    "'런던의 글로벌 대학'으로 불리는 연구중심 공립 종합대. 잉글랜드 최초로 종교·성별 무관 입학을 허용한 개방 전통의 대학이며, 약 150개국 출신 학생이 재학 중입니다.":
        "Known as 'London's global university', a research-intensive institution with an open tradition — the first in England to admit students regardless of religion or gender — and students from around 150 countries.",
    "영국 전체에서 여섯 번째로 긴 역사를 가진 스코틀랜드 수도의 명문. 세계문화유산 도시 에든버러 시내 전역에 캠퍼스가 퍼져 있으며 인문·의학·교육 계열이 고루 강합니다.":
        "The sixth-oldest university in the UK, in Scotland's capital. Its campuses spread across the World Heritage city of Edinburgh, with even strength in the humanities, medicine and education.",
    "조지 4세의 왕립헌장으로 설립된 런던 중심부의 명문. 템스강변 캠퍼스에서 법·의학·인문사회 전 분야를 아우르며, 간호·정신의학은 세계 최상위권으로 평가받습니다.":
        "Founded by royal charter under George IV, in the heart of London. Its Thames-side campuses span law, medicine and the humanities, and its nursing and psychiatry are rated among the world's best.",
    "2004년 UMIST와 빅토리아 맨체스터대가 합병해 탄생한 영국 최대급 단일 캠퍼스 대학. 노벨상 25명 배출, 산업도시 맨체스터 특유의 산학 연계와 취업 인프라가 강점입니다.":
        "Formed in 2004 from the merger of UMIST and the Victoria University of Manchester, one of the UK's largest single-campus universities. It counts 25 Nobel laureates, with the industry links and career infrastructure of an industrial city.",
    "1909년 왕실 칙허를 받은 레드브릭 연구 명문으로 노벨상 수상자 13명을 배출했습니다. 활기찬 대학도시 브리스톨에서 이공계와 사회과학이 고루 강세를 보입니다.":
        "A red-brick research university chartered in 1909, with 13 Nobel laureates. In the lively university city of Bristol, it is strong across both STEM and the social sciences.",
    "사회과학에 특화된 세계 최고 수준의 대학. 경제학·정치학·국제관계 분야에서 세계 정상급이며, 졸업생의 금융·국제기구 진출이 활발합니다. 학부는 A-level·IB 전형으로만 선발합니다.":
        "The world's leading specialist in the social sciences — at the very top for economics, politics and international relations, with graduates moving into finance and international organisations. Undergraduate entry is by A-level / IB only.",
    "짧은 역사에도 영국 Top 10에 오른 실력파 명문. WBS(워릭 비즈니스 스쿨)와 수학·경제 계열이 특히 유명하며, 1983년부터 자체 파운데이션(IFP)을 운영해 온 국제학생 친화 대학입니다.":
        "A young university that has climbed into the UK top 10. Warwick Business School and its mathematics and economics are especially renowned, and its own foundation (IFP, since 1983) makes it notably welcoming to international students.",
    "영국 최초의 시민대학(레드브릭)으로 빅토리아 여왕 칙허로 설립됐습니다. 영국 제2의 도시 버밍엄의 넓은 캠퍼스에서 공학·스포츠과학·교육학이 강세입니다.":
        "England's first civic ('red-brick') university, chartered by Queen Victoria. On a spacious campus in Birmingham, the UK's second city, it is strong in engineering, sport science and education.",
    "영국에서 학생 수가 가장 많은 축에 드는 대형 러셀그룹 명문. 경영·회계 계열과 교육학이 강하고, 학생 도시 리즈의 생활 인프라와 합리적 생활비가 장점입니다.":
        "One of the largest Russell Group universities by student numbers. Strong in business, accounting and education, in a student city with good amenities and reasonable living costs.",
    "영국에서 네 번째로 오래된 대학이자 애덤 스미스, 제임스 와트를 배출한 스코틀랜드 명문. 고풍스러운 캠퍼스와 의·수의학 전통, 폭넓은 전공 선택지가 강점입니다.":
        "The UK's fourth-oldest university, alma mater of Adam Smith and James Watt. Its strengths are a historic campus, a deep tradition in medicine and veterinary science, and broad subject choice.",
    "1828년 의과대학이 전신인 러셀그룹 명문. 공학 계열 연구력이 영국 최상위권이며 저널리즘·도시계획 등 특성화 전공도 유명합니다. 학생 물가가 합리적인 도시입니다.":
        "A Russell Group university tracing back to an 1828 medical school. Its engineering research ranks among the UK's best, with well-known specialisms in journalism and urban planning, in a city where student costs stay reasonable.",
    "잉글랜드에서 옥스브리지 다음으로 오랜 역사를 가진 컬리지형 전통 명문. 세계문화유산인 더럼 성·대성당과 함께하는 캠퍼스, 옥스브리지식 컬리지 문화가 특징입니다.":
        "England's oldest university after Oxbridge, collegiate in the Oxbridge style, with a campus set beside the World Heritage castle and cathedral of Durham.",
    "영국을 넘어 중국·말레이시아에도 캠퍼스를 둔 글로벌 러셀그룹 대학. 약학·의학 계열이 특히 유명하며 넓고 아름다운 University Park 캠퍼스로 잘 알려져 있습니다.":
        "A global Russell Group university with campuses in China and Malaysia as well as the UK. Especially renowned for pharmacy and medicine, and known for its large, handsome University Park campus.",
    "러셀그룹 창립 멤버로 전자·컴퓨터공학 연구가 영국 최상위권입니다. 남부 해안 도시 특유의 온화한 환경에 캠퍼스가 시내에서 가까워 생활이 편리합니다.":
        "A founding member of the Russell Group whose electronics and computer science research ranks among the UK's best, on a convenient campus in a mild south-coast city.",
    "스코틀랜드에서 가장 오래된 대학으로, 영국 국내 평가에서 옥스브리지와 1~2위를 다투는 명문. 바닷가 소도시 전체가 캠퍼스인 친밀한 학풍이 특징입니다.":
        "Scotland's oldest university, trading first and second place with Oxbridge in UK domestic league tables. The whole seaside town serves as its campus, giving it an unusually close-knit character.",
    "유네스코 세계문화유산 도시 바스가 내려다보이는 캠퍼스의 실무 강호. 경영·공학 계열 취업률이 영국 최상위권이며 산업 연계 인턴십(플레이스먼트) 제도로 유명합니다.":
        "A practical powerhouse on a campus overlooking the World Heritage city of Bath. Graduate employment in management and engineering ranks among the UK's best, and its industry placement scheme is renowned.",
    "잉글랜드 남서부의 아름다운 캠퍼스를 가진 러셀그룹 명문. 회계·재무와 스포츠과학이 강하며, 최근 QS 순위가 크게 상승하고 있는 성장세의 대학입니다.":
        "A Russell Group university with a beautiful campus in south-west England. Strong in accounting, finance and sport science, and rising sharply in recent QS rankings.",
    "1834년 의과대학이 전신인 러셀그룹 명문. 캠퍼스가 시내 중심에 있어 생활이 편리하고, 영국 주요 학생 도시 중 물가가 합리적인 편이라 유학 만족도가 높습니다.":
        "A Russell Group university tracing back to an 1834 medical school. Its city-centre campus makes daily life easy, and among major UK student cities its costs are comparatively reasonable.",
    "영국 국내 평가 Top 15 단골의 컬리지형 캠퍼스 대학. 경영대학(LUMS)은 영국 내 최상위 평가를 받으며, 9개 컬리지 기숙 시스템으로 국제학생 정착 지원이 잘 되어 있습니다.":
        "A collegiate campus university and regular in the UK domestic top 15. Its management school (LUMS) is rated at the very top in the UK, and the nine-college residential system settles international students in well.",
    "사우스다운스 국립공원으로 둘러싸인 캠퍼스의 연구 명문. 국제개발학은 세계 1위 평가를 받은 바 있으며, 자유로운 해변 도시 브라이튼의 분위기가 매력입니다.":
        "A research university on a campus ringed by the South Downs National Park. Its development studies have been rated world #1, and the free-spirited seaside city of Brighton adds to the appeal.",
    "9개 기숙형 컬리지로 이루어진 러셀그룹 대학. TESOL·교육학과 컴퓨터과학이 강하며, 중세 성곽 도시 요크의 안전하고 아늑한 환경이 유학 생활에 좋습니다.":
        "A Russell Group university built around nine residential colleges. Strong in TESOL, education and computer science, in the safe, snug surroundings of the medieval walled city of York.",
    "스포츠 분야 세계 1위에 여러 차례 오른 스포츠·공학 특성화 명문. 영국 최대 규모의 단일 캠퍼스와 올림픽 수준의 스포츠 시설을 갖추고 있습니다.":
        "A specialist in sport and engineering, repeatedly ranked world #1 for sport, with the UK's largest single campus and Olympic-standard facilities.",
    "런던대학교(UoL) 소속의 러셀그룹 멤버로, 잉글랜드 최초 의대인 Royal London Hospital이 뿌리입니다. 런던 대학 중 드물게 캠퍼스형 기숙 환경을 갖춘 것이 장점입니다.":
        "A University of London and Russell Group member with roots in the Royal London Hospital, England's first medical school. Unusually for a London university, it offers a residential campus setting.",

    /* --- 학부 질문 · 선택지 --- */
    "현재 학업 상태를 알려주세요.": "Where are you in school right now?",
    "고등학교 2학년 재학 · 수료 예정": "Second-to-last school year, finishing soon",
    "고3 재학 · 졸업 예정": "In the final year, graduating soon",
    "고교 졸업 (검정고시 포함)": "Finished school (incl. equivalency exam)",
    "해외고 · 국제학교 (A-level · IB 등)": "International school / school abroad (A-level, IB...)",
    "고교 내신 성적대는 어느 정도인가요?": "Roughly where do your school grades sit?",
    "상위권 (1 ~ 3등급대)": "Top band (grades 1–3)",
    "중위권 (4 ~ 6등급대)": "Middle band (grades 4–6)",
    "그 외 · 검정고시 · 산출 어려움": "Other / equivalency exam / hard to certify",
    "※ 파운데이션·IYO는 고교 내신과 IELTS를 함께 평가하며, 기관별 기준이 다릅니다.":
        "Foundations and IYOs assess school grades and IELTS together, and criteria differ by provider.",
    '공인 영어 성적(IELTS 등)이 있으신가요?<br><span class="block mt-3 text-[13px] text-gray-500 leading-relaxed">※ 파운데이션·IYO 입학은 비자 규정상 UKVI IELTS가 요구되는 경우가 많습니다. 영역별 세부 점수 기준은 기관마다 다릅니다.</span>':
        'Do you hold an English test result (IELTS or similar)?<br><span class="block mt-3 text-[13px] text-gray-500 leading-relaxed">Visa rules mean foundation and IYO entry usually requires IELTS for UKVI. Component score requirements differ by provider.</span>',
    "IELTS 5.5 이상": "IELTS 5.5 or above",
    "IELTS 4.5 ~ 5.0": "IELTS 4.5–5.0",
    "아직 없음 / 준비 전": "Not yet",
    "희망하는 전공 계열을 선택해주세요.": "Which subject area are you aiming for?",
    "찾는 계열이 없어요 · 특수 전공 직접 입력": "My subject isn't listed — type it in",
    "진학에서 가장 중요하게 생각하는 기준은 무엇인가요?": "What matters most in your choice?",
    "최상위권 도전 (옥스브리지 · G5)": "Aiming for the very top (Oxbridge · G5)",
    "랭킹과 합격 안정성의 균형": "A balance of ranking and a safe offer",
    "빠른 학위 취득 · 기간 단축": "Finishing the degree quickly",

    /* --- 특수 전공 매칭 키워드 · 경로 라벨 (표시용 아님 · 대조 완전성용) --- */
    "매니지먼트": "Management", "회계": "Accounting", "재무": "Finance", "경제": "Economics",
    "무역": "Trade", "물류": "Logistics", "호텔": "Hospitality", "관광": "Tourism",
    "스포츠": "Sport", "컴퓨터": "Computing", "소프트": "Software", "프로그래": "Programming",
    "코딩": "Coding", "게임": "Games", "인공지능": "AI", "데이터": "Data", "보안": "Security",
    "정보": "Information", "기계": "Mechanical", "전자": "Electronics", "전기": "Electrical",
    "토목": "Civil", "항공우주": "Aerospace", "자동차": "Automotive", "로봇": "Robotics",
    "화공": "Chemical engineering", "재료": "Materials", "조선": "Shipbuilding", "메카": "Mechatronics",
    "물리": "Physics", "생물": "Biology", "생명": "Life sciences", "통계": "Statistics",
    "천문": "Astronomy", "지질": "Geology", "간호": "Nursing", "치료": "Therapy", "보건": "Health",
    "의예": "Pre-medicine", "수의": "Veterinary", "언론": "Journalism", "방송": "Broadcasting",
    "신문": "Newspapers", "국제": "International", "정치": "Politics", "외교": "Diplomacy",
    "사회": "Society", "심리": "Psychology", "법": "Law", "범죄": "Criminology",
    "커뮤니케이션": "Communication", "광고": "Advertising", "홍보": "PR", "교육": "Education",
    "미술": "Fine art", "디자인": "Design", "예술": "Arts", "영문": "English", "어학": "Languages",
    "언어": "Language", "역사": "History", "문학": "Literature", "패션": "Fashion",
    "건축": "Architecture", "영화": "Film", "연기": "Acting", "공연": "Performing arts",
    "애니": "Animation", "항공": "Aviation", "소프트웨어": "Software", "사이버": "Cyber",
    "개발": "Development", "지구": "Earth", "고전": "Classics",
    "A-level · IB 전형": "A-level / IB entry",
    "자체 파운데이션": "University-run foundation",
    "Kaplan 제휴": "Kaplan partner",
    "Study Group 제휴": "Study Group partner",
    "INTO 제휴": "INTO partner"
};

/* ───────── 언어 상태 · 조회 ───────── */
/* 기본값은 한국어(브라우저 언어와 무관하게 항상 동일).
 * 저장된 선택이 없으면 "ko"를 저장까지 해서 다른 사이트에도 그대로 이어지게 한다. */
let LANG = (function () {
    try {
        var saved = localStorage.getItem("sgh-lang");
        if (saved === "ko" || saved === "en") return saved;
        localStorage.setItem("sgh-lang", "ko");
    } catch (e) {}
    return "ko";
})();

function t(key) {
    var dict = I18N[LANG] || I18N.ko;
    return dict[key] !== undefined ? dict[key] : I18N.ko[key];
}

function tr(s) {
    if (LANG !== "en" || typeof s !== "string") return s;
    return DATA_EN[s] !== undefined ? DATA_EN[s] : s;
}

function applyLang() {
    document.documentElement.lang = LANG;
    document.title = t("docTitle");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("docDesc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var v = t(el.dataset.i18n); if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        var v = t(el.dataset.i18nHtml); if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
        var v = t(el.dataset.i18nAria); if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
        var v = t(el.dataset.i18nTitle); if (v !== undefined) el.setAttribute("title", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
        var v = t(el.dataset.i18nAlt); if (v !== undefined) el.setAttribute("alt", v);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
        var on = b.dataset.lang === LANG;
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    if (typeof syncThemeLabel === "function") syncThemeLabel();
    if (typeof refreshDynamicView === "function") refreshDynamicView();
}

function setLang(l) {
    if (l !== "ko" && l !== "en") return;
    LANG = l;
    try { localStorage.setItem("sgh-lang", l); } catch (e) {}
    applyLang();
}

document.addEventListener("DOMContentLoaded", applyLang);
