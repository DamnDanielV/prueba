data = {
    "c": ["a"],
    "a": ["c", "f", "g", "d"],
    "d": ["a", "f", "e"],
    "g": ["a", "i"],
    "f": ["a", "d", "i"],
    "e": ["d", "j"],
    "h": ["k"],
    "i": ["k", "g", "f", "j"],
    "j": ["i", "e", "b"],
    "k": ["h", "i", "b"],
    "b": ["k", "j"]
}

class Nodo {

    parent = undefined

    constructor(tree, node) {
        this.tree = tree
        this.node = node

    }

    checkSolution(finalNode) {
        return this.node === finalNode
    }

    addNode() {
        children = []
        // children = this.tree.map((child)=> {this.tree[]})
        for (let i = 0; i < this.tree[this.node].length; i++) {
            children.push(new Nodo(ths.tree, this.tree[this.node][i]))
        }
        return children
    }
    pathFinded() {
        path = []
        currentNode = this
        while (currentNode.parent) {
            path.push(currentNode.node)
            currentNode = currentNode.parent
        }
        path.push(currentNode.node)
        return path
    }
}

mazes = new Nodo(data, "a")

class BfsAlgo {
    tsteps = 0
    path = []
    constructor(start, final) {
        this.start = start
        this.final = final
        this.limit = this.start
        this.children = []
    }
    addChild(name) {
        this.children.push(name)
        return this
    }
    breadthFirstSearch(array = []) {
        const nodes = [this]
        while (nodes.length) {
            const currentNode = nodes.shift()
            array.push(currentNode.name)
            nodes.push(...currentNode.children)
        }
        return array
    }
}

