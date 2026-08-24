export const colors = {
  primary:   '#e91e8c',  // 버튼, 제목, 채워진 별
  border:    '#f48fb1',  // 카드 테두리
  muted:     '#f06292',  // 부제목, 보조 텍스트
  dark:      '#c2185b',  // 이름, 네비 텍스트
  darker:    '#ad1457',  // 본문 텍스트
  bg:        '#fce4ec',  // 페이지 배경, 구분선
  hover:     '#fdf2f6',  // 호버 배경
  starEmpty: '#f8bbd0',  // 빈 별
} as const

export const tw = {
  // 카드 컨테이너
  card:       'bg-white border-2 border-[#f48fb1] rounded-2xl shadow-sm',
  dashedCard: 'bg-white border-2 border-dashed border-[#f48fb1] rounded-2xl',
  section:    'bg-white border-2 border-[#f48fb1] rounded-2xl px-6 py-5 shadow-sm',

  // 타이포그래피
  sectionTitle: 'text-base font-bold text-[#e91e8c]',
  bodyText:     'text-sm text-[#ad1457] leading-loose',
  metaText:     'text-xs text-[#f48fb1]',
  nameText:     'font-bold text-[#ad1457]',
  mutedText:    'text-sm text-[#f06292]',

  // 인터랙션
  hoverRow: 'hover:bg-[#fdf2f6] transition-colors cursor-pointer',
} as const
