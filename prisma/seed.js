const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

const problems = [
  {
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    difficulty: "EASY",
    tags: ["Array", "Hash Table"],
    examples: {
      JAVASCRIPT: {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      PYTHON: {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      JAVA: {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    },
    constraints:
      "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nOnly one valid answer exists.",
    testCases: [
      { input: "2 7 11 15\n9", output: "0 1" },
      { input: "3 2 4\n6", output: "1 2" },
      { input: "3 3\n6", output: "0 1" },
    ],
    codeSnippets: {
      JAVASCRIPT: `function twoSum(nums, target) {
  // Write your solution here
};

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
const lines = [];
rl.on('line', line => lines.push(line.trim()));
rl.on('close', () => {
  const nums = lines[0].split(' ').map(Number);
  const target = parseInt(lines[1]);
  console.log(twoSum(nums, target).join(' '));
});`,
      PYTHON: `import sys

def two_sum(nums, target):
    # Write your solution here
    pass

lines = sys.stdin.read().split('\\n')
nums = list(map(int, lines[0].split()))
target = int(lines[1])
print(*two_sum(nums, target))`,
      JAVA: `import java.util.*;
public class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] nums = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        int target = sc.nextInt();
        System.out.println(Arrays.toString(twoSum(nums, target)).replaceAll("[\\[\\],]", "").trim());
    }
}`,
    },
    referenceSolutions: {
      JAVASCRIPT: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
const lines = [];
rl.on('line', line => lines.push(line.trim()));
rl.on('close', () => {
  const nums = lines[0].split(' ').map(Number);
  const target = parseInt(lines[1]);
  console.log(twoSum(nums, target).join(' '));
});`,
      PYTHON: `import sys

def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen:
            return [seen[target - n], i]
        seen[n] = i

lines = sys.stdin.read().split('\\n')
nums = list(map(int, lines[0].split()))
target = int(lines[1])
print(*two_sum(nums, target))`,
      JAVA: `import java.util.*;
public class Main {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) return new int[]{map.get(complement), i};
            map.put(nums[i], i);
        }
        return new int[]{};
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] nums = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        int target = sc.nextInt();
        int[] res = twoSum(nums, target);
        System.out.println(res[0] + " " + res[1]);
    }
}`,
    },
  },
  {
    title: "Valid Palindrome",
    description:
      "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise.",
    difficulty: "EASY",
    tags: ["String", "Two Pointers"],
    examples: {
      JAVASCRIPT: {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      PYTHON: {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      JAVA: {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
    },
    constraints:
      "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
    testCases: [
      { input: "A man, a plan, a canal: Panama", output: "true" },
      { input: "race a car", output: "false" },
      { input: " ", output: "true" },
    ],
    codeSnippets: {
      JAVASCRIPT: `function isPalindrome(s) {
  // Write your solution here
};

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
rl.on('line', line => {
  console.log(isPalindrome(line) ? "true" : "false");
  rl.close();
});`,
      PYTHON: `import sys

def is_palindrome(s):
    # Write your solution here
    pass

s = sys.stdin.readline().rstrip('\\n')
print(str(is_palindrome(s)).lower())`,
      JAVA: `import java.util.*;
public class Main {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(isPalindrome(sc.nextLine()));
    }
}`,
    },
    referenceSolutions: {
      JAVASCRIPT: `function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let l = 0, r = s.length - 1;
  while (l < r) { if (s[l++] !== s[r--]) return false; }
  return true;
};

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
rl.on('line', line => {
  console.log(isPalindrome(line) ? "true" : "false");
  rl.close();
});`,
      PYTHON: `import sys

def is_palindrome(s):
    s = ''.join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]

s = sys.stdin.readline().rstrip('\\n')
print(str(is_palindrome(s)).lower())`,
      JAVA: `import java.util.*;
public class Main {
    public static boolean isPalindrome(String s) {
        s = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        int l = 0, r = s.length() - 1;
        while (l < r) { if (s.charAt(l++) != s.charAt(r--)) return false; }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(isPalindrome(sc.nextLine()));
    }
}`,
    },
  },
  {
    title: "Best Time to Buy and Sell Stock",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    difficulty: "EASY",
    tags: ["Array", "Dynamic Programming"],
    examples: {
      JAVASCRIPT: {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5.",
      },
      PYTHON: {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5.",
      },
      JAVA: {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5.",
      },
    },
    constraints: "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
    testCases: [
      { input: "7 1 5 3 6 4", output: "5" },
      { input: "7 6 4 3 1", output: "0" },
    ],
    codeSnippets: {
      JAVASCRIPT: `function maxProfit(prices) {
  // Write your solution here
};

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
rl.on('line', line => {
  const prices = line.split(' ').map(Number);
  console.log(maxProfit(prices));
  rl.close();
});`,
      PYTHON: `import sys

def max_profit(prices):
    # Write your solution here
    pass

prices = list(map(int, sys.stdin.readline().split()))
print(max_profit(prices))`,
      JAVA: `import java.util.*;
public class Main {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] prices = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        System.out.println(maxProfit(prices));
    }
}`,
    },
    referenceSolutions: {
      JAVASCRIPT: `function maxProfit(prices) {
  let min = Infinity, max = 0;
  for (const p of prices) {
    min = Math.min(min, p);
    max = Math.max(max, p - min);
  }
  return max;
};

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
rl.on('line', line => {
  const prices = line.split(' ').map(Number);
  console.log(maxProfit(prices));
  rl.close();
});`,
      PYTHON: `import sys

def max_profit(prices):
    min_price, max_profit = float('inf'), 0
    for p in prices:
        min_price = min(min_price, p)
        max_profit = max(max_profit, p - min_price)
    return max_profit

prices = list(map(int, sys.stdin.readline().split()))
print(max_profit(prices))`,
      JAVA: `import java.util.*;
public class Main {
    public static int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE, max = 0;
        for (int p : prices) {
            min = Math.min(min, p);
            max = Math.max(max, p - min);
        }
        return max;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] prices = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        System.out.println(maxProfit(prices));
    }
}`,
    },
  },
];

async function main() {
  const adminUser = await db.user.findFirst({ where: { role: "ADMIN" } });

  if (!adminUser) {
    console.error(
      "No ADMIN user found. Please sign in first to create your account, then run the seed."
    );
    process.exit(1);
  }

  console.log(`Seeding problems for admin: ${adminUser.email}`);

  for (const problem of problems) {
    const existing = await db.problem.findFirst({
      where: { title: problem.title },
    });
    if (existing) {
      console.log(`Skipping "${problem.title}" — already exists`);
      continue;
    }
    await db.problem.create({ data: { ...problem, userId: adminUser.id } });
    console.log(`✓ Created: ${problem.title}`);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
