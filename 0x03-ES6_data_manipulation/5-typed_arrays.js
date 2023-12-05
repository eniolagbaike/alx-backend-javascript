export default function createInt8TypedArray(lenght, position, value) {
    if (position < 0 || position >= lenght) {
      throw new Error('Position outside range');
    }
  
    const buffer = new ArrayBuffer(lenght);
    const int8View = new Int8Array(buffer);
    int8View[position] = value;
    return new DataView(buffer);
  }