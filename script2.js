function findsumnums(num, target) {
    const seen = new Set(); // Create a Set to keep track of numbers we have seen

    for (const number of num) {
        const complement = target - number; // Calculate the required complement

        if (seen.has(complement)) { // Check if the complement exists in the Set
            return [complement, number]; // Return the pair that sums up to the target
        }

        seen.add(number); // Add the current number to the Set
    }

    return 0; // Return 0 if no pair is found
}

// Example usage:
console.log(findsumnums([1, 2, 3, 4], 7)); // Output: [3, 4]
console.log(findsumnums([1, 2, 3, 4], 10)); // Output: 0
