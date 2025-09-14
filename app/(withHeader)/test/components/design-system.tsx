"use client";

import { useState } from "react";

import { Loader2, Search, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-title-1 mb-1">{title}</h2>
      {desc && <p className="text-caption mb-4">{desc}</p>}
      <div className="card-base card-hover p-4">{children}</div>
    </section>
  );
}

export default function DesignSystemPage() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="container-max container-px py-10 space-y-10">
      <header className="mb-4">
        <h1 className="text-headline">Design System Preview</h1>
        <p className="text-caption">
          globals.css의 토큰/유틸리티가 shadcn/ui 컴포넌트에 적용된 예시
        </p>
      </header>

      {/* Colors */}
      <Section
        title="Colors"
        desc="브랜드/의미 색상 미리보기"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: "--brand-primary", var: "--brand-primary" },
            { name: "--success", var: "--success" },
            { name: "--warning", var: "--warning" },
            { name: "--error", var: "--error" },
            { name: "--info", var: "--info" },
            { name: "--muted", var: "--muted" },
          ].map((c) => (
            <div
              key={c.name}
              className="border rounded-md overflow-hidden"
            >
              <div style={{ background: `hsl(var(${c.var}))`, height: 56 }} />
              <div className="px-3 py-2 text-xs">{c.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section
        title="Typography"
        desc="텍스트 스케일/행간/자간 적용"
      >
        <div className="space-y-3">
          <div className="text-display">Display — 큰 헤드라인</div>
          <div className="text-headline">Headline — 섹션 타이틀</div>
          <div className="text-title-1">Title 1 — 카드/페이지 타이틀</div>
          <div className="text-title-2">Title 2 — 섹션 소제목</div>
          <div className="text-title-3">Title 3 — 블록 제목</div>
          <p className="text-body">
            본문 텍스트 예시입니다. 단락 가독성을 위한 leading 및 한글
            word-break 규칙이 적용됩니다.
          </p>
          <p className="text-caption">캡션/보조 텍스트 예시</p>
        </div>
      </Section>

      {/* Buttons */}
      <Section
        title="Buttons"
        desc="사이즈/아이콘/상태"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button className="btn-sm btn-icon-gap">
            <Search className="icon-16" />
            Small
          </Button>
          <Button className="btn-md btn-icon-gap">
            <Search className="icon-20" />
            Medium
          </Button>
          <Button className="btn-lg btn-icon-gap">
            <Search className="icon-24" />
            Large
          </Button>

          <Button
            variant="secondary"
            className="btn-md"
          >
            Secondary
          </Button>
          <Button
            variant="outline"
            className="btn-md"
          >
            Outline
          </Button>
          <Button
            variant="destructive"
            className="btn-md"
          >
            Destructive
          </Button>

          <Button
            className="btn-md"
            onClick={async () => {
              setLoading(true);
              await new Promise((r) => setTimeout(r, 1200));
              setLoading(false);
            }}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="icon-20 animate-spin" />
            ) : (
              "Loading Action"
            )}
          </Button>
        </div>
      </Section>

      {/* Inputs */}
      <Section
        title="Inputs"
        desc="포커스 링/에러 상태/레이블 간격"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              className="text-label"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              id="email"
              placeholder="name@example.com"
              className="focus-ring"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-label"
              htmlFor="name"
            >
              Name (Error)
            </label>
            <Input
              id="name"
              className="border-red-500 focus-visible:ring-red-500"
              placeholder="에러 상태 예시"
            />
            <p className="text-caption text-red-600">유효하지 않은 값입니다.</p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <label
              className="text-label"
              htmlFor="bio"
            >
              Bio
            </label>
            <Textarea
              id="bio"
              placeholder="여러 줄 입력"
              className="focus-ring"
            />
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section
        title="Cards"
        desc="카드 기본/호버, 이미지 비율, 말줄임"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <Card
              key={n}
              className="card-base card-hover overflow-hidden"
            >
              <div className="ratio-16x9">
                <img
                  className="img-cover"
                  src={`https://picsum.photos/seed/${n}/800/450`}
                  alt="sample"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-title-2 line-clamp-2">
                  길어질 수 있는 카드 타이틀 예시 — 콘텐츠가 길 경우 최대 두
                  줄까지 표시합니다
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-body line-clamp-3">
                  설명 텍스트 예시입니다. 설명은 최대 세 줄로 제한되며 초과분은
                  말줄임 처리됩니다. 다양한 길이의 텍스트로 레이아웃이
                  안정적으로 유지되는지 확인하세요.
                </p>
                <div className="flex items-center gap-2 text-caption">
                  <Star className="icon-16" />
                  <span className="truncate">Author Name</span>
                  <span>•</span>
                  <span>2025-09-14</span>
                </div>
                <div className="flex gap-2">
                  <Badge>Tag</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                <div className="pt-2">
                  <Button className="btn-md">자세히 보기</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Grid/Responsive */}
      <Section
        title="Responsive Grid"
        desc="auto-fill과 최소 아이템 너비 280px 예시"
      >
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Card
              key={i}
              className="card-base"
            >
              <CardContent className="p-4">
                <div className="h-32 skeleton mb-3" />
                <div className="text-title-3 mb-1">아이템 {i + 1}</div>
                <p className="text-caption">반응형 그리드 아이템</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tabs / Switch */}
      <Section
        title="Tabs & Switch"
        desc="상호작용 컴포넌트 상태 스타일"
      >
        <Tabs
          defaultValue="account"
          className="w-full"
        >
          <TabsList className="mb-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent
            value="account"
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-body">알림 받기</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body">마케팅 수신 동의</span>
              <Switch />
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                type="password"
                placeholder="현재 비밀번호"
              />
              <Input
                type="password"
                placeholder="새 비밀번호"
              />
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Skeleton / States */}
      <Section
        title="Skeleton & States"
        desc="로딩/빈 상태 시각화 유틸"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <div className="ratio-16x9 skeleton" />
            <div className="h-5 w-3/4 skeleton" />
            <div className="h-4 w-full skeleton" />
            <div className="h-4 w-5/6 skeleton" />
          </div>
          <div className="flex flex-col items-center justify-center text-center p-8 border rounded-md">
            <Search className="icon-24 text-muted-foreground mb-2" />
            <div className="text-title-3 mb-1">콘텐츠가 없습니다</div>
            <p className="text-caption mb-3">다른 키워드로 검색해보세요.</p>
            <Button className="btn-md">새로고침</Button>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-8 border rounded-md">
            <div className="icon-24 text-red-600 mb-2">!</div>
            <div className="text-title-3 mb-1 text-red-600">
              오류가 발생했습니다
            </div>
            <p className="text-caption mb-3">잠시 후 다시 시도해주세요.</p>
            <Button
              variant="outline"
              className="btn-md"
            >
              다시 시도
            </Button>
          </div>
        </div>
      </Section>

      {/* Utilities */}
      <Section
        title="Utilities"
        desc="아이콘 크기/비율/클램프 등"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div className="mb-2 text-label">Icon sizes</div>
            <div className="flex items-center gap-4">
              <Search className="icon-16" />
              <Search className="icon-20" />
              <Search className="icon-24" />
            </div>
          </div>
          <div>
            <div className="mb-2 text-label">Aspect ratios</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="ratio-1x1 bg-muted rounded" />
              <div className="ratio-4x3 bg-muted rounded" />
              <div className="ratio-16x9 bg-muted rounded" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mb-2 text-label">Line clamp</div>
            <p className="text-body line-clamp-2">
              이 문장은 라인 클램프 2줄이 적용되어 있습니다. 내용이 길어도 두
              줄까지만 보이고 그 이상은 말줄임 처리됩니다. 레이아웃 안정성
              확인용 문장입니다.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
