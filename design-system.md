## 1. 색상 시스템 (Color System)

### 브랜드 컬러

```css
Primary Color: #3B82F6 (Blue 500)
- Primary 50: #EFF6FF
- Primary 100: #DBEAFE
- Primary 200: #BFDBFE
- Primary 300: #93C5FD
- Primary 400: #60A5FA
- Primary 500: #3B82F6 (기본)
- Primary 600: #2563EB
- Primary 700: #1D4ED8
- Primary 800: #1E40AF
- Primary 900: #1E3A8A

Secondary Color: #6B7280 (Gray 500)
Accent Color: #F59E0B (Amber 500)
```

### 의미적 컬러

```css
Success: #10B981 (Emerald 500)
Warning: #F59E0B (Amber 500)
Error: #EF4444 (Red 500)
Info: #3B82F6 (Blue 500)
```

### 중립 컬러

```css
Gray 50: #F9FAFB
Gray 100: #F3F4F6
Gray 200: #E5E7EB
Gray 300: #D1D5DB
Gray 400: #9CA3AF
Gray 500: #6B7280
Gray 600: #4B5563
Gray 700: #374151
Gray 800: #1F2937
Gray 900: #111827
```

### 접근성

- **대비비**: WCAG AA 기준 (4.5:1)
- **다크모드**: 각 색상의 HSL 명도 반전

## 2. 타이포그래피 시스템

### 폰트 스케일

```css
Display: 36px (모바일) / 48px (태블릿) / 60px (데스크탑)
Headline: 24px / 30px / 36px
Title 1: 20px / 24px / 30px
Title 2: 18px / 20px / 24px
Title 3: 16px / 18px / 20px
Body Large: 16px / 18px / 18px
Body: 14px / 16px / 16px
Body Small: 12px / 14px / 14px
Caption: 12px / 12px / 12px
Label: 14px / 14px / 14px
```

### 폰트 굵기

```css
Light: 300
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

### 행간

```css
Display: 1.1 (110%)
Headline: 1.2 (120%)
Title: 1.3 (130%)
Body: 1.5 (150%)
Caption: 1.4 (140%)
```

### 자간

```css
Display: -0.02em
Headline: -0.01em
기타: 0 (기본값)
```

## 3. 간격 시스템

### 기본 간격 단위 (4px 기반)

```css
Base Unit: 4px
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### 컴포넌트별 내부 간격

```css
Button:
- Small: 8px (상하) / 16px (좌우)
- Medium: 12px (상하) / 20px (좌우)
- Large: 16px (상하) / 24px (좌우)

Card:
- 내부 패딩: 24px
- 제목-내용 간격: 12px
- 내용-액션 간격: 16px

Input Field:
- 내부 패딩: 12px (상하) / 16px (좌우)
- 레이블-인풋 간격: 8px
```

### 컴포넌트 간 간격

```css
섹션 간 간격: 64px
카드 간 간격: 16px
폼 요소 간 간격: 16px
리스트 아이템 간격: 8px
```

## 4. 그리드 시스템

### 브레이크포인트

```css
Mobile: 768px 이하
Tablet: 768px ~ 1024px
Desktop: 1024px ~ 1440px
Wide: 1440px 이상
```

### 컨테이너 최대 너비

```css
Mobile: 100%
Tablet: 768px
Desktop: 1024px
Wide: 1280px
```

### 그리드 설정

```css
컬럼 수: 12컬럼
거터 너비: 16px
컨테이너 좌우 패딩: 16px (모바일) / 24px (데스크탑)
```

## 5. 컴포넌트별 세부 사양

### 버튼

```css
크기:
- Small: 높이 32px, 최소 너비 64px
- Medium: 높이 40px, 최소 너비 80px
- Large: 높이 48px, 최소 너비 96px

모서리 둥글기: 8px
테두리 두께: 1px
아이콘 크기: 16px × 16px
아이콘-텍스트 간격: 8px
```

### 카드

```css
최소 높이: 200px
최대 너비: 400px
모서리 둥글기: 12px
그림자:
- 기본: 0 1px 3px rgba(0,0,0,0.1)
- 호버: 0 4px 12px rgba(0,0,0,0.15)
테두리: 1px solid #E5E7EB

이미지 영역:
- 종횡비: 16:9
- 최대 높이: 200px

제목:
- 최대 줄 수: 2줄
- 폰트 크기: 18px
- 줄 간격: 24px

설명:
- 최대 줄 수: 3줄
- 폰트 크기: 14px
```

### 입력 필드

```css
높이: 40px
모서리 둥글기: 8px
테두리:
- 기본: 1px solid #D1D5DB
- 포커스: 2px solid #3B82F6
- 에러: 1px solid #EF4444

포커스 링: 3px #3B82F640
```

### 네비게이션

```css
높이: 64px
로고 크기: 32px × 32px
메뉴 아이템 간격: 24px
드롭다운 메뉴:
- 너비: 200px
- 아이템 높이: 40px
- 패딩: 8px
```

## 6. 애니메이션 및 전환 효과

### 트랜지션 시간

```css
Fast: 150ms (버튼 호버 등)
Medium: 300ms (모달 열기/닫기 등)
Slow: 500ms (페이지 전환 등)
```

### 이징 함수

```css
Ease Out: cubic-bezier(0, 0, 0.2, 1)
Ease In Out: cubic-bezier(0.4, 0, 0.2, 1)
Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### 호버 효과

```css
버튼 호버:
- Transform: translateY(-1px)
- 색상 변경: 투명도 90%

카드 호버:
- 그림자 변화: 0 8px 25px rgba(0,0,0,0.15)
- Transform: translateY(-2px)
```

## 7. ProfileLayout 적용 예시

```tsx
import { PropsWithChildren } from "react";

function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 lg:px-6 py-16">
      <div className="flex flex-col items-center gap-8">{children}</div>
    </div>
  );
}

export default ProfileLayout;
```

## 8. 상태별 스타일

### 로딩 상태

```css
스켈레톤 배경색: #F3F4F6
스켈레톤 애니메이션: 1.5초
로딩 스피너: 24px × 24px, #3B82F6, 1초/회전
```

### 빈 상태

```css
아이콘 크기: 48px × 48px
아이콘 색상: #9CA3AF
제목 폰트 크기: 18px
설명 폰트 크기: 14px
전체 패딩: 48px
```

### 에러 상태

```css
에러 메시지 배경색: #FEF2F2
에러 메시지 텍스트 색상: #DC2626
에러 아이콘 크기: 20px × 20px
패딩: 12px
모서리 둥글기: 8px
```

### 반응형 특정 수치

```css
최소 터치 영역: 44px × 44px
모바일 패딩: 16px
모바일 폰트 크기 조정 비율: 90%
사이드바 너비: 280px
콘텐츠 영역 패딩: 24px
그리드 아이템 최소 너비: 280px
```
