import { randomInRange } from './randomInRange'

type TrainFunctionType = (inputs: Array<number>, target: number) => void
type GuessFunctionType = (inputs: Array<number>) => 1 | -1

/**
 * Receive inputs and compute a "guess"
 * The algorithm for calculating the change in weights:
 *      delta Weights = Error * Input * Learning rate
 */
export const perceptron: () => [train: TrainFunctionType, guess: GuessFunctionType] = () => {
  /**
   * Generate random weights from [-1, 1) range
   */
  let weights: Array<number> = [...Array<number>(3)].map(() => (Math.round(randomInRange(-1, 1) * 100) / 100))

  /**
   * Learning rate
   */
  const learningRate = .001

  /**
   * Sums up the weighted inputs and applies the activation function
   * @param inputs
   */
  const guess: GuessFunctionType = inputs => sign(inputs.reduce((acc, cur, i) => acc + cur * weights[i], 0))

  /**
   * Adjust, tweak the weights based on the calculated error and learning rate
   * @param inputs
   * @param target
   */
  const train: TrainFunctionType = (inputs, target) => {
    const g = guess(inputs)
    const error = target - g

    weights = weights.map((w, i) => w + (Math.round((error * inputs[i] * learningRate) * 100) / 100))
  }

  return [train, guess]
}

/**
 * The activation function
 * @param n
 */
const sign: (n: number) => 1 | -1 = n => n > 0 ? 1 : -1
