export class HeapSort {
  private arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public sort(): number[] {
    const n = this.arr.length;

    // 1. Construir o Max Heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(n, i);
    }

    // 2. Extrair elementos do heap
    for (let i = n - 1; i > 0; i--) {
      this.swap(0, i);     // Move o maior para o final
      this.heapify(i, 0); // Reorganiza o heap reduzido
    }

    return this.arr;
  }

  // Garante a propriedade do heap
  private heapify(size: number, root: number): void {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    if (left < size && this.arr[left]! > this.arr[largest]!) {
      largest = left;
    }

    if (right < size && this.arr[right]! > this.arr[largest]!) {
      largest = right;
    }

    if (largest !== root) {
      this.swap(root, largest);
      this.heapify(size, largest);
    }
  }

  private swap(i: number, j: number): void {
    [this.arr[i], this.arr[j]] = [this.arr[j]!, this.arr[i]!];
  }
}
const valores = [9,0,5,8,2,1];
const heapSort = new HeapSort(valores);

console.log(heapSort.sort());
// [1, 3, 4, 5, 10]
