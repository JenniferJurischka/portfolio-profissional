export default function NuvemDivisoria() {
  return (
    <div className="w-full overflow-hidden" style={{ height: "160px" }}>
      <svg
        viewBox="0 0 1400 160"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* nuvem principal — traço oriental com espiral */}
        <path
          d="M-50 100 Q30 60 80 80 Q100 88 110 75 Q120 60 108 52 Q95 44 85 55 Q78 63 88 68 Q98 72 105 65 Q130 45 180 70 Q230 95 280 65 Q310 48 340 68 Q360 80 355 68 Q350 55 338 58 Q328 62 335 70 Q342 76 355 70 Q390 52 450 75 Q510 98 570 68 Q610 48 650 70 Q680 85 675 72 Q670 58 658 62 Q648 66 655 74 Q662 80 675 74 Q710 55 770 78 Q830 100 890 70 Q930 50 965 72 Q985 84 980 72 Q975 60 963 63 Q953 67 960 74 Q967 80 980 74 Q1020 55 1090 78 Q1160 100 1220 72 Q1270 50 1320 75 Q1370 95 1450 80"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* nuvem secundária — mais suave, deslocada */}
        <path
          d="M-100 120 Q0 85 60 105 Q90 115 95 102 Q100 90 88 86 Q78 83 75 92 Q72 100 82 103 Q110 88 170 108 Q230 128 300 100 Q340 82 380 102 Q400 112 398 100 Q395 88 383 91 Q440 72 510 95 Q580 118 650 90 Q690 72 730 95 Q760 110 755 98 Q820 75 900 98 Q980 120 1050 92 Q1100 74 1150 98 Q1200 118 1300 100 Q1380 85 1450 108"
          fill="none"
          stroke="var(--accent-soft)"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    </div>
  )
}