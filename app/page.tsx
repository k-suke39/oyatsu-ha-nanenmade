'use client';

import '@/styles/globals.css';
import Image from 'next/image';
import { useState } from 'react';

const snacks = [
	{ id: 1, name: 'うまい棒 のり塩味', price: 12 },
	{ id: 2, name: 'うまい棒 とんかつソース味', price: 12 },
	{ id: 3, name: 'うまい棒 やさいサラダ味', price: 12 },
	{ id: 4, name: 'うまい棒 めんたい味', price: 12 },
	{ id: 5, name: 'うまい棒 サラミ味', price: 12 },
	{ id: 6, name: 'うまい棒 コーンポタージュ味', price: 12 },
	{ id: 7, name: '餅太郎', price: 10 },
	{ id: 8, name: 'どんどん焼きソース', price: 30 },
	{ id: 9, name: 'フライドポテト', price: 30 },
	{ id: 10, name: 'かっぱえびせん', price: 60 },
	{ id: 11, name: 'サッポロポテト', price: 60 },
	{ id: 12, name: 'フィリックスガム 当たり付き', price: 10 },
	{ id: 13, name: 'フエガム', price: 30 },
	{ id: 14, name: 'そのまんまグレープガム', price: 30 },
	{ id: 15, name: 'そのまんまコーラガム', price: 30 },
	{ id: 16, name: 'そのまんまソーダガム', price: 30 },
	{ id: 17, name: 'すっぱいレモンにご用心ガム', price: 30 },
	{ id: 18, name: 'ゴーゴーガム', price: 30 },
	{ id: 19, name: 'こんにゃくスティックゼリー', price: 15 },
	{ id: 20, name: 'りんごゼリー', price: 15 },
	{ id: 21, name: 'ヨーグルトゼリー', price: 15 },
	{ id: 22, name: 'グミのわ グレープ', price: 60 },
	{ id: 23, name: 'グミのわ グレープ コーラ', price: 60 },
	{ id: 24, name: 'まけんグミ', price: 12 },
	{ id: 25, name: 'くだもの屋さんグミ', price: 40 },
	{ id: 26, name: 'ミニモンスター フルーツ味', price: 12 },
	{ id: 27, name: 'シゲキックス レモン', price: 110 },
	{ id: 28, name: 'パインアメ', price: 60 },
	{ id: 29, name: 'モロッコヨーグル', price: 60 },
	{ id: 30, name: 'ジャンボヨーグル', price: 250 },
	{ id: 31, name: 'チョコ大福', price: 10 },
	{ id: 32, name: 'チョコっとソフト', price: 35 },
	{ id: 33, name: 'ストロベリーソフト', price: 35 },
	{ id: 34, name: 'ヤングドーナツ', price: 48 },
	{ id: 35, name: 'どらチョコ ミニどら焼き', price: 40 },
	{ id: 36, name: 'ビスコ', price: 45 },
	{ id: 37, name: 'ビスコ クリーム', price: 45 },
	{ id: 38, name: 'カギっこチョコ', price: 20 },
	{ id: 39, name: 'わなげチョコレート', price: 70 },
	{ id: 40, name: 'ハイエイトチョコレート', price: 50 },
	{ id: 41, name: 'コアラマーチ', price: 40 },
	{ id: 42, name: 'チョコモナカ', price: 70 },
	{ id: 43, name: 'ぷくぷくたい エアインチョコ', price: 70 },
	{ id: 44, name: '不二家 パラソルチョコ', price: 50 },
	{ id: 45, name: '不二家 ペコポコチョコ', price: 110 },
	{ id: 46, name: 'ヤッターめん', price: 12 },
	{ id: 47, name: 'ベビースター チキン ミニ', price: 33 },
	{ id: 48, name: 'ベビースター チキン ソース', price: 33 },
	{ id: 49, name: 'ブタメン', price: 80 },
	{ id: 50, name: 'ペペロンチーノ', price: 70 },
	{ id: 51, name: 'どーん太郎', price: 20 },
	{ id: 52, name: 'ココアシガレット', price: 40 },
	{ id: 53, name: 'コーラシガレット', price: 40 },
	{ id: 54, name: 'あわコーララムネ', price: 30 },
	{ id: 55, name: 'あわソーダラムネ', price: 30 },
	{ id: 56, name: 'おとなの抹茶シガレット', price: 50 },
	{ id: 57, name: 'ミニコーラ', price: 30 },
	{ id: 58, name: 'ミニビタCシガレット', price: 40 },
	{ id: 59, name: 'スイカのタネラムネ', price: 60 },
	{ id: 60, name: '森永ラムネ', price: 80 },
	{ id: 61, name: 'ニコニコラムネ', price: 30 },
	{ id: 62, name: 'クッピーラムネ', price: 20 },
	{ id: 63, name: 'カラオケマイク', price: 80 },
	{ id: 64, name: 'ミニボトルサワー', price: 40 },
	{ id: 65, name: 'カンパイラムネ', price: 30 },
	{ id: 66, name: 'ゴーゴーラムネ', price: 30 },
	{ id: 67, name: 'モンスタースタンプサイダー', price: 30 },
	{ id: 68, name: 'フルーツ糸引きアメ', price: 10 },
	{ id: 69, name: 'ガブリチュウ グレープ', price: 30 },
	{ id: 70, name: 'ガブリチュウ コーラ', price: 30 },
	{ id: 71, name: 'ガブリチュウ ラムネ', price: 30 },
	{ id: 72, name: 'チューイングキャンディ ソーダ', price: 40 },
	{ id: 73, name: 'チューイングキャンディ グレープ', price: 40 },
	{ id: 74, name: 'チューキャン グレープ', price: 40 },
	{ id: 75, name: 'チューキャン ソーダ', price: 40 },
	{ id: 76, name: 'うずまきキャンディ', price: 200 },
	{ id: 77, name: 'ミニうずまきキャンディ', price: 60 },
	{ id: 78, name: 'ロングチュー コーラ', price: 30 },
	{ id: 79, name: 'ロングチュー サイダー', price: 30 },
	{ id: 80, name: 'ロングチュー オレンジ', price: 30 },
	{ id: 81, name: 'ふにゃりっち', price: 50 },
	{ id: 82, name: '生ソフトキャンディ', price: 100 },
	{ id: 83, name: 'ねりっこ 水アメ', price: 35 },
	{ id: 84, name: 'ねるねるねるね', price: 130 },
	{ id: 85, name: 'うめだメシ', price: 20 },
	{ id: 86, name: 'ミルキー', price: 50 },
	{ id: 87, name: '森永 ミルクキャラメル', price: 130 },
	{ id: 88, name: 'ボンタンアメ', price: 120 },
	{ id: 89, name: 'サクマドロップス', price: 150 },
	{ id: 90, name: 'チュッパチャップス', price: 45 },
	{ id: 91, name: 'おしどりミルクケーキ', price: 200 },
	{ id: 92, name: 'パチパチパニック', price: 30 },
	{ id: 93, name: 'サワーペーパーキャンディ グレープ', price: 25 },
	{ id: 94, name: 'サワーペーパーキャンディ コーラ', price: 25 },
	{ id: 95, name: 'プチこんぺいとう', price: 30 },
	{ id: 96, name: 'すもも漬', price: 50 },
	{ id: 97, name: 'スッパイマン', price: 50 },
	{ id: 98, name: 'ウメトラ兄弟!', price: 50 },
	{ id: 99, name: 'うぐいすあんず', price: 80 },
	{ id: 100, name: 'みつあんず', price: 30 },
	{ id: 101, name: 'あんずボー', price: 30 },
	{ id: 102, name: 'さくら大根', price: 60 },
	{ id: 103, name: 'でか！さくら大根', price: 120 },
	{ id: 104, name: '梅ジャム', price: 20 },
	{ id: 105, name: '都こんぶ', price: 110 },
	{ id: 106, name: 'トーカイのフ菓子', price: 30 },
	{ id: 107, name: 'ミルクせんべい', price: 30 },
	{ id: 108, name: 'ソースせんべい', price: 40 },
	{ id: 109, name: '梅ジャムせんべい', price: 40 },
	{ id: 110, name: '花丸せんべい', price: 120 },
	{ id: 111, name: 'にんじん ぽん菓子', price: 40 },
	{ id: 112, name: 'きなこ棒', price: 10 },
	{ id: 113, name: '青リンゴ餅 餅飴', price: 35 },
	{ id: 114, name: 'こざくら餅 餅飴', price: 35 },
	{ id: 115, name: '棒カルメ', price: 15 },
	{ id: 116, name: 'きびだんご', price: 60 },
	{ id: 117, name: '焼肉さん太郎', price: 15 },
	{ id: 118, name: '蒲焼さん太郎', price: 15 },
	{ id: 119, name: 'わさびのり太郎', price: 15 },
	{ id: 120, name: 'とり焼さん太郎', price: 12 },
	{ id: 121, name: 'すだこさん太郎', price: 15 },
	{ id: 122, name: 'ビッグカツ', price: 40 },
	{ id: 123, name: 'デカいかそうめん', price: 30 },
	{ id: 124, name: 'ギュ〜牛〜', price: 50 },
	{ id: 125, name: '珍味銀行', price: 20 },
	{ id: 126, name: '甘栗むいちゃいました', price: 150 },
	{ id: 127, name: 'ペンシルカルパス', price: 30 },
	{ id: 128, name: 'おやつカルパス', price: 12 },
	{ id: 129, name: 'おやつスルメ', price: 30 },
	{ id: 130, name: 'ジャンボ元祖するめジャーキー', price: 100 },
	{ id: 131, name: 'カットよっちゃん', price: 50 },
	{ id: 132, name: 'タラタラしてんじゃねーよ', price: 50 },
	{ id: 133, name: 'まるごと酢いか', price: 60 },
	{ id: 134, name: 'けんこう よっちゃん', price: 60 },
	{ id: 135, name: 'パンチコーラ', price: 30 },
	{ id: 136, name: 'シャンペンサイダー', price: 30 },
	{ id: 137, name: 'ジャンボコーラジュース', price: 50 },
	{ id: 138, name: 'パックジュース フレッシュソーダ', price: 20 },
	{ id: 139, name: 'わるガキびいる', price: 25 },
	{ id: 140, name: 'ミルメーク コーヒー', price: 100 },
	{ id: 141, name: 'ミルメーク イチゴ', price: 100 },
	{ id: 142, name: 'うまい棒 チーズ味', price: 12 },
];

export default function Page() {
	const [budget, setBudget] = useState<number | null>(null);
	const [remainingBudget, setRemainingBudget] = useState(0);
	const [affordableSnacks, setAffordableSnacks] = useState<
		{ name: string; price: number }[]
	>([]);
	const [twitterUrl, setTwitterUrl] = useState<string | null>(null);

	const maxBudget = 300;
	const [overBudget, setOverBudget] = useState(false);
	const [title, setTitle] = useState(false);

	const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newBudget = parseFloat(event.target.value);
		setBudget(newBudget);

		//301円以上の場合に、お菓子を非表示
		if (newBudget >= 301) {
			setAffordableSnacks([]);
			setOverBudget(true);
		}

		//予算が501円以上の時、表記を変更する
		if (newBudget > maxBudget) {
			setOverBudget(true);
			return;
		}

		setBudget(newBudget);
		setOverBudget(false);
		setTitle(true);
		// 予算内でスナックをフィルタリング
		const affordableSnacks = snacks.filter((snack) => snack.price <= newBudget);
		console.log(affordableSnacks);
		// フィルタリングしたスナックをシャッフル
		const shuffledSnacks = affordableSnacks.sort(() => Math.random() - 0.5);

		let snackBudget = newBudget;
		let selectedSnacks = [];
		let remainingBudget = snackBudget;

		for (let snack of shuffledSnacks) {
			if (snack.price <= snackBudget) {
				selectedSnacks.push(snack);
				snackBudget -= snack.price;
			} else {
				remainingBudget = snackBudget;
				break;
			}
		}

		const remainingAffordableSnacks = affordableSnacks.filter(
			(snack) => snack.price <= remainingBudget
		);

		for (let snack of remainingAffordableSnacks) {
			if (snack.price <= remainingBudget) {
				selectedSnacks.push(snack);
				remainingBudget -= snack.price;
			} else {
				break;
			}
		}

		setAffordableSnacks(selectedSnacks);

		// シェア時の文字数を考慮するため、7つまでのお菓子を選ぶ
		const forTweetSnacks = selectedSnacks.slice(0, 7);
		// おこづかいと選ばれたお菓子の情報をまとめる
		const snackNames = forTweetSnacks.map((snack) => snack.name).join('、');
		// Twitterシェア時のテキストをまとめる
		const tweetText = `https://twitter.com/intent/tweet?text=今日のおこづかいは${newBudget}円！選んだ駄菓子は${snackNames}あたりだよ！&url=https://oyatsu-ha-nanenmade.vercel.app/`;
		// TwitterURLをセット
		setTwitterUrl(tweetText);
	};
	return (
		<div>
			<div className="flex justify-center items-center flex-col h-screen">
				<a
					href="#"
					className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
				>
					<h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">
						今日のおやつは何円まで？
					</h5>
					<input
						type="number"
						value={budget !== null ? budget.toString() : ''}
						onChange={handleBudgetChange}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="おこづかいを100~300円で入れてね"
						required
					></input>
				</a>
				<div>
					{overBudget && (
						<h5 className="mt-4 mb-2 text-7xl font-bold tracking-tight text-red-500 dark:text-white">
							お母さん『そんなに渡していません！』
						</h5>
					)}
					{title && overBudget == false && (
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
							今日の駄菓子はこれ！
						</h5>
					)}
					{twitterUrl && overBudget == false && (
						<a
							href={twitterUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-center items-center m"
						>
							{' '}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7 4xl"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
						</a>
					)}
					<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
						{affordableSnacks.map((snack, index) => (
							<li
								key={index}
								className="flex items-center text-gray-800 text-2xl font-bold"
							>
								<svg
									className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
								</svg>
								{snack.name} / {snack.price}円
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
				<Image
					src="/dagashi.jpg"
					alt="駄菓子屋"
					layout={`fill`}
					objectFit={`cover`}
				/>
			</div>
		</div>
	);
}
