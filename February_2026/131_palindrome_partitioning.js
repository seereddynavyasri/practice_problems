var palindromePartitioning = function(s) {
    let res = [];
    function palindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    function backtrack(start, path) {
        if (start === s.length) {
            res.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (palindrome(s, start, end)) {
                path.push(s.substring(start, end + 1));
                backtrack(end + 1, path);
                path.pop();
            }
        }
    }

    backtrack(0, []);
    return res;
};

const s = "aab";
console.log(palindromePartitioning(s));
