export function guid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string): string => {
        const r: number = Math.random() * 16 | 0, v: number = c === 'x' ? r : (r & 0x3 | 0x8);

        return v.toString(16);
    });
}