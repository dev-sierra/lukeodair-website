export default function CricketEdgeDetection() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        Edge Detection in Amateur Cricket
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500">
        Historical — M.Eng dissertation, Durham University, 2017
      </p>

      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        A wearable device — accelerometer and microphone mounted to the back
        of a cricket bat — paired with supervised machine learning to detect
        faint bat-ball edges, the hardest decision umpires make when judging
        a catch. Built and evaluated against the International Cricket
        Council&apos;s 91% required decision-making accuracy for professional
        umpires.
      </p>

      <h2 className="mt-2 text-lg font-semibold">Approach</h2>
      <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
        <li>
          Custom device: ADXL362 3-axis accelerometer + ADMP401 microphone on
          an mbed NXP LPC1768 microcontroller, sampling at 100Hz
        </li>
        <li>
          206 samples collected from a BOLA bowling machine at consistent
          speed and line, classified as hit, edge, or miss
        </li>
        <li>
          FFT feature extraction from post-impact accelerometer and
          microphone data — peak, covariance, and standard-deviation features
          tested across 20 supervised ML algorithms (trees, discriminant
          analysis, SVMs, KNN, ensembles) via 5-fold cross-validation
        </li>
      </ul>

      <h2 className="mt-2 text-lg font-semibold">Results</h2>
      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        A linear SVM trained on the covariance and standard deviation of the
        post-impact accelerometer FFT reached 88.2% average accuracy and
        89.3% peak accuracy — comparable to the ICC&apos;s 91% benchmark for
        professional umpires — with zero confusion between edges and misses,
        the distinction that actually matters for a caught decision.
        Accuracy improved consistently as the dataset grew, suggesting the
        approach could exceed human umpire accuracy with more data.
      </p>

      <a
        href="/docs/cricket-edge-detection-dissertation.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/10 dark:hover:bg-white/[.06]"
      >
        Read the full dissertation (PDF)
      </a>
    </main>
  );
}
