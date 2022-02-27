# mrble-illustration

## Figma

https://www.figma.com/file/3m4E1CxUPMut14YtqDZG8J/mrble-illust?node-id=0%3A1

## Storybook

https://mrp301.github.io/mrble-illust/

## .prettierrc

- trailingComma:ES5で有効な末尾のカンマ(オブジェクト、配列など) つける
- semi:末尾にセミコロン追加
- bracketSpacing：オブジェクトリテラルの角かっこの内側にスペースを入れる
- jsxBracketSameLine:複数行のJSX要素の最終行の最後に「>」を置く


## next/imageについて

```js
<Image
  src={`/river.jpg`} // ソースファイル, string
  width={420} // 表示幅, number
  height={280} // 表示高さ, number
  quality={75} // 画質, number
  priority={false} // 表示の優先度, boolean
  loading={"lazy"} // 遅延ロードするかどうか, "lazy" | "eager"
  unoptimized={false} // 最適化するかどうか, boolean
  layout={"fixed"} // レイアウト, "fill" | "fixed" | "intrinsic" | "responsive"
  objectFit={"contain"} // layout='fill'の場合のobject-fit
  objectPosition={"50% 50%;"} // layout='fill'の場合のobject-position
/>
```

ビルド時に画像も処理すると時間がかかるので、`/_next/image`という画像サーバーで非同期にデコードされて読み込まれる仕組み。
デフォでviewportから最適化された画像を遅延読み込みしてくれる。
Chromeではjpgやpngよりも軽量なwebpに変換して表示してくれる。
有能すぎる。


参考：https://www.forcia.com/blog/001561.html

## Masonry layout

Pinterestとかで使われてるレイアウト

## コードフォーマット関連

参考；https://qiita.com/sprout2000/items/ee4fc97f83f45ba1d227

